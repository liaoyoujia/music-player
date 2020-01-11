import React from 'react'
import { RecomendListWraper, RecomendListTab } from './style'
import { getCount } from '../../../utils/index'
function RecommendList(props) {
  const { recommendList } = props
  return (
    <RecomendListWraper>
      <h2>推荐歌单</h2>
      <RecomendListTab>
        {recommendList.map(item => {
          return (
            <div className="list-item" key={item.playCount}>
              <div className="img-wrapper">
                <img
                  width="100%"
                  height="100%"
                  src={item.picUrl + '?param=300x300'}
                  alt="music"
                />
                <div className="play-count">
                  <i className="iconfont icon-erji"></i>
                  <span>{getCount(item.playCount)}</span>
                </div>
              </div>
              <p className="overflow3">{item.name}</p>
            </div>
          )
        })}
      </RecomendListTab>
    </RecomendListWraper>
  )
}

export default React.memo(RecommendList)
