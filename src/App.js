import React, { useState, useEffect, useRef } from "react";

export const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};
const App = () => {
  const triggerNotif = useNotification("Can I steal your Kimch?", {
    body: "I love kimchi dont you",
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Trigger</button>
    </div>
  );
};

export default App;
