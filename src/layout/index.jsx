import React from "react";
import { renderRoutes } from "react-router-config";

function Home(props) {
  const { route } = props;
  return (
    <div className="home" style={{ backgroundColor: "red" }}>
      
      <i className="iconfont icon-all icon-zhankai"></i>
      {renderRoutes(route.routes)}
    </div>
  );
}

export default React.memo(Home);
