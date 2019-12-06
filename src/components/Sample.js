import withAlertMessagesContainer, {
  alertMessage
} from "../hoc/withAlertMessagesContainer/withAlertMessagesContainer";

const SampleApp = () => (
  <React.Fragment>
    {["error", "success", "info"].map(messageType => (
      <div key={messageType}>
        <button
          onClick={() => alertMessage[messageType](`It's ${messageType}`)}
        >
          {`Show ${messageType}`}
        </button>
      </div>
    ))}
  </React.Fragment>
);

export default withAlertMessagesContainer(SampleApp);
