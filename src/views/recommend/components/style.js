import styled from "styled-components";
import style from "../../../globalStyle.js";

export const RecomendListWraper = styled.div`
  width:98%;
  margin:10px auto 0;
  box-sizing:border-box;
  &>h2{
    color:${style['font-color-desc']};
    font-weight:700;
    padding-left:6px;
    font-size:${style['font-size-m']};
    line-height:50px;
  }
`;
export const RecomendListTab = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap: wrap;
  box-sizing:border-box;
  .list-item{
    width:32%;
    margin-bottom:10px;
  p{
      text-align: justify;
      line-height:16px;
      font-size:${style['font-size-s']};
    }
   .img-wrapper{
    position: relative;
    width:100%;
    height: 0;
    padding-bottom: 100%;
    .play-count{
      width:100%;
      position:absolute;
      right:4px;
      top:4px;
      text-align:right;
      color: ${style["font-color-light"]};
      font-size:${style['font-size-ss']};
    }
    img{
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
}
`


export const Tab = styled.div`
  width:100%;
  display: flex;
  box-sizing:border-box;
  background-color:${style['theme-color']};
  justify-content: space-around;
  padding:14px 0;
  color:#e4e4e4;
  align-items: center;
  .selected >span{
    padding-bottom:2px;
    border-bottom:3px solid #fff;
  }
 `
