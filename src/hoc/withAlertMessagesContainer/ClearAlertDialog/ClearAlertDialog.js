const ClearAlertDialog = ({ onClearClick }) => (
  <div
    data-notify="container"
    className="alert clear-all-alert-wrapper"
    role="alert"
    data-notify-position="bottom-center"
    onClick={onClearClick}
  >
    <span type="button">Clear All</span>
  </div>
);
