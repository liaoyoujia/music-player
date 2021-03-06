import React from 'react'
import Slider from '../../components/slider/index'
import RecommnedList from './components/recommnedList'
function Recommend(props) {
  const bannerLists = [1, 2, 3, 4].map(item => ({
    url:
      'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg'
  }))
  const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => ({
    id: index,
    picUrl:
      'https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg',
    playCount: (1717112 + index) * 1,
    name: '朴树、许巍、李健、郑钧、老狼、赵雷'
  }))
  return (
    <div className="recommend">
      <Slider bannerLists={bannerLists}></Slider>
      <RecommnedList recommendList={recommendList}></RecommnedList>
      recommend
    </div>
  )
}

export default React.memo(Recommend)
