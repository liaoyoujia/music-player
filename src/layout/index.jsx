import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Top, Tab } from './style.js'
import { NavLink } from 'react-router-dom'

function Home(props) {
  const { route } = props
  return (
    <div className="home">
      <Top>
        <i className="iconfont icon-zhankai"></i>
        <h2>music</h2>
        <i className="iconfont icon-sousuo"></i>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected">
          <span>推荐</span>
        </NavLink>
        <NavLink to="/singer" activeClassName="selected">
          <span>歌手</span>
        </NavLink>
        <NavLink to="/rank" activeClassName="selected">
          <span>排行榜</span>
        </NavLink>
      </Tab>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default React.memo(Home)
