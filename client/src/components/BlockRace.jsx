import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "../mainpage.css";

function BlockRace() {
  const [isLoading, setIsLoading] = useState(true);

  function handleIframeLoad() {
    setIsLoading(false);
  }

  return (
    <>
      {isLoading && <div style={{ height: "1.5vh", width: "100%" }} />}
      {isLoading && <Loading />}
      <div className="blockrace">
        <iframe
          src="https://flo.uri.sh/visualisation/14854093/embed"
          title="Interactive or visual content"
          className="flourish-embed-iframe"
          onLoad={handleIframeLoad}
          style={{ display: isLoading ? "none" : "block" }}
          // style={{ width: "100%", height: "600px" }}
          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
      </div>
    </>
  );
}

export default BlockRace;
