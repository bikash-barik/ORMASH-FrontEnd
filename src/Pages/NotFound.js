import React, { useEffect, useState } from 'react';

const NotFound = () => {
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (reloadCount < 5) {
        setReloadCount(reloadCount + 1);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, [reloadCount]);

  useEffect(() => {
    if (reloadCount > 0 && reloadCount <= 1) {
      window.location.reload(false);
    }
  }, [reloadCount]);

  return (
    <div className="grid-block main-content wrap regular-padding">
      <div className="grid-content small-12">
        <div style={{ textAlign: "center" }}>
          <h3>404 page not found</h3>
          <p>This page does not exist.</p>
          <img  height={700} width="100%" src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" alt="404 error ,This page does not exist." />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
