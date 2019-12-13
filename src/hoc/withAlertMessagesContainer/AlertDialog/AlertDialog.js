const AlertDialog = ({ message, type, handleOnClose }) => (
  <div
    data-notify="container"
    className={`alert ${type} animated bounce`}
    role="alert"
    data-notify-position="bottom-center"
  >
    <button
      onClick={handleOnClose}
      type="button"
      aria-hidden="true"
      className="close"
      data-notify="dismiss"
    />

    <span
      style={{
        wordBreak: "break-word"
      }}
    >
      {message}
    </span>
  </div>
);
