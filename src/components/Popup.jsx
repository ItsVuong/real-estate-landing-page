import { useState, useEffect } from "react";

function PopupNotification() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000); // Hide after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="toast show position-fixed bottom-0 end-0 m-3" role="alert" style={{ minWidth: "250px", zIndex: 1050 }}>
      <div className="toast-header">
        <strong className="me-auto">Notification</strong>
        <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
      </div>
      <div className="toast-body">This is a pop-up message!</div>
    </div>
  );
}

export default PopupNotification;

