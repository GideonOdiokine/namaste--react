import React from "react";

const UserOffline = () => {
  return (
    <div className="user-offline-container">
      <h1 className="user-offline-heading">🔴 Offline!</h1>
      {/* <img className="offline-image" src={'https://github.com/chetannada/Namaste-React/blob/main/public/Images/offline.png?raw=true'} alt="Offline" /> */}
      <p className="user-offline-message">
        Sorry, it seems that you are currently offline.
      </p>
    </div>
  );
};

export default UserOffline;
