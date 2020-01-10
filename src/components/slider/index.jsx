import React, { useEffect } from 'react'
import Swiper from 'swiper'
import { SwiperContainer } from './style.js'
import 'swiper/css/swiper.min.css'

function Slider(props) {
  const { bannerLists } = props
  useEffect(() => {
    let swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: true,
      autoplayDisableOnInteraction: false,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }, [bannerLists.length])
  return (
    <SwiperContainer>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {bannerLists.map((item, index) => {
            return (
              <div className="swiper-slide" key={item.url + '-' + index}>
                <img
                  src={item.url}
                  width="100%"
                  height="100%"
                  alt="recommend"
                ></img>
              </div>
            )
          })}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SwiperContainer>
  )
}

export default React.memo(Slider)
