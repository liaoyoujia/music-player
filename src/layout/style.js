import styled from "styled-components";
import style from "../globalStyle.js";

export const Top = styled.div`
  display: flex;
  width:100%;
  box-sizing:border-box;
  justify-content: space-between;
  align-items: center;
  padding:10px;
  background-color:${style['theme-color']};
  &>h2{
    color:#f1f1f1;
    font-size:20px;
    line-height:30px;
  }
  &>i{
    font-size:25px;
  }
`;
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
