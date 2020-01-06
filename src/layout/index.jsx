import React from "react";
import { renderRoutes } from "react-router-config";

function Home(props) {
  const { route } = props;
  return (
    <div className="home">
      home
      {renderRoutes(route.routes)}
    </div>
  );
}

export default React.memo(Home);
