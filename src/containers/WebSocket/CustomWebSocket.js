import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class CustomWebSocket extends Component {
  state = {
    connection: null
  };
  constructor(props) {
    super(props);
    this.webSocket = new WebSocket("ws://localhost:5000/cable");

    this.state = {
      webSocket: null
    };
  }

  // single websocket instance for the own application and constantly trying to reconnect.

  UNSAFE_componentWillMount() {
    this.connect();
  }

  componentWillUnmount() {
    this.webSocket.close();
  }

  timeout = 250; // Initial timeout duration as a class variable

  /**
   * @function connect
   * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
   */
  connect = () => {
    let that = this; // cache the this
    let connectInterval;

    // websocket onopen event listener
    this.webSocket.onopen = () => {
      const msg = {
        command: "subscribe",
        identifier: JSON.stringify({
          channel: "CartItemsChannel"
        })
      };
      this.webSocket.send(JSON.stringify(msg));

      this.setState({ connection: "Created" });

      console.log("connected websocket main component");

      this.setState({ webSocket: this.webSocket });

      that.timeout = 250; // reset timer to 250 on open of websocket connection
      clearTimeout(connectInterval); // clear Interval on on open of websocket connection
    };

    this.webSocket.bufferType = "arraybuffer";
    this.webSocket.onmessage = event => {
      // listen to data sent from the websocket server

      const message = JSON.parse(event.data);

      if (typeof message.type === "undefined") {
        this.setState({ dataFromServer: message });
        console.log(message.message.data.length);
        const cart = message.message.data;
        this.props.onSaveCart(cart);

        let totalPrice = 0;

        cart.map(item => {
          return (totalPrice += item.count * item.product.sales_price);
        });

        this.props.onSaveTotalCartPrice(totalPrice.toFixed(2));
      }
    };

    // websocket onclose event listener
    this.webSocket.onclose = e => {
      this.setState({ connection: "closed" });
      console.log(
        `Socket is closed. Reconnect will be attempted in ${Math.min(
          10000 / 1000,
          (that.timeout + that.timeout) / 1000
        )} second.`,
        e.reason
      );

      that.timeout = that.timeout + that.timeout; //increment retry interval
      connectInterval = setTimeout(this.check, Math.min(10000, that.timeout));
      //call check function after timeout
    };

    // websocket onerror event listener
    this.webSocket.onerror = err => {
      this.setState({ connection: "Error" });
      console.error(
        "Socket encountered error: ",
        err.message,
        "Closing socket"
      );

      this.webSocket.close();
    };
  };

  /**
   * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
   */
  check = () => {
    const { webSocket } = this.state;
    if (!webSocket && webSocket.readyState === WebSocket.CLOSED) {
      this.connect();
    }

    //check if websocket instance is closed, if so call `connect` function.
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveCart: cart => dispatch(actions.saveCart(cart)),
    onSaveTotalCartPrice: totalPrice =>
      dispatch(actions.saveTotalCartPrice(totalPrice))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomWebSocket);
