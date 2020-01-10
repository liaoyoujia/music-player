import styled from "styled-components";
import style from "../../globalStyle.js";

export const SwiperContainer = styled.div`
  width:100%;
  position:relative;
  background:white;
  &::before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:60%;
    background:${style['theme-color']};
  }
  .swiper-container{
    width: 98%;
    height: 160px;
    border-radius:10px;
    overflow:hidden;
    .swiper-pagination-bullet-active {
      background:${style['theme-color']};
    }
    .swiper-wrapper{
      width: 100%;
      .swiper-slide{
        width:100%;
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
   }
  }
`
