import React, { useState } from "react";

export default function OfficeOpened() {
  // This will load current hours and reply with open or closed JSX message between 8 and 17h.
  const now = new Date().getHours();
  const [hours, sethours] = useState(now);
  let message = "";
  const open = hours >= 8 && hours < 17;
  open ? (message = "open") : (message = "closed");

  // This will update time every minute
  setInterval(() => {
    sethours(now);
  }, 60000);

  return (
    <div>
      We are:
      <div>
        <b>{message}</b>
      </div>
    </div>
  );
}
