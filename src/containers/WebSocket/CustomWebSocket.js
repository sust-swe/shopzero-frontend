import React, { Component } from "react";
import { connect } from "react-redux";

class CustomWebSocket extends Component {
  state = {
    connection: null
  };
  constructor(props) {
    super(props);

    this.state = {
      webSocket: null
    };
  }

  // single websocket instance for the own application and constantly trying to reconnect.

  componentDidMount() {
    this.connect();
  }

  timeout = 250; // Initial timeout duration as a class variable

  /**
   * @function connect
   * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
   */
  connect = () => {
    let webSocket = new WebSocket("ws://localhost:5000/cable");
    let that = this; // cache the this
    let connectInterval;

    // websocket onopen event listener
    webSocket.onopen = () => {
      const msg = {
        command: "subscribe",
        identifier: JSON.stringify({
          channel: "CartItemsChannel"
        })
      };
      webSocket.send(JSON.stringify(msg));

      this.setState({ connection: "Created" });

      console.log("connected websocket main component");

      this.setState({ webSocket: webSocket });

      that.timeout = 250; // reset timer to 250 on open of websocket connection
      clearTimeout(connectInterval); // clear Interval on on open of websocket connection
    };

    webSocket.bufferType = "arraybuffer";
    webSocket.onmessage = event => {
      // listen to data sent from the websocket server
      const message = JSON.parse(event.data);

      this.setState({ dataFromServer: message });
      console.log(message);
    };

    // websocket onclose event listener
    webSocket.onclose = e => {
      this.setState({ connection: "closed" });
      console.log(
        `Socket is closed. Reconnect will be attempted in ${Math.min(
          10000 / 1000,
          (that.timeout + that.timeout) / 1000
        )} second.`,
        e.reason
      );

      that.timeout = that.timeout + that.timeout; //increment retry interval
      connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
    };

    // websocket onerror event listener
    webSocket.onerror = err => {
      this.setState({ connection: "Error" });
      console.error(
        "Socket encountered error: ",
        err.message,
        "Closing socket"
      );

      webSocket.close();
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

export default connect(mapStateToProps)(CustomWebSocket);
