import styled from 'styled-components'
import { down } from 'styled-breakpoints'


const Container = styled.div`
  backdrop-filter: blur(2px);
  border-radius: 2px;
  margin-top: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  border-top: 1px dashed #CECECE;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    border: 1px dashed #CECECE;
    position: absolute;
    left: 0;
    top: 915px;
  }

  @media (max-width: 1285px) {
    &::after {
      top: 985px;
    }

  @media (max-width: 980px) {
    &::after {
      top: 1100px;
    }

    @media (max-width: 950px) {
      &::after {
        top: 1640px;
      }
    }
  }
`

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 42px;
  width: 60%;
  margin-top: 106px;

  .block-title {
    margin-right: 35px;
  }

  @media (max-width: 1250px) {
    width: 80%;
  }

  @media (max-width: 950px) {

    flex-direction: column;
    align-items: center;
  }
`


const Title = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 155%;
  color: #111827;
  margin-top: 70px;
  margin-bottom: 10px;  

  @media (max-width: 950px) {
    font-size: 24px;
    line-height: 100%;
  }
`

const Text = styled.p`
  color: #111827;
  margin-bottom: 20px;
  width: 87%;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;

  @media (max-width: 950px) {
    font-size: 14px;
    line-height: 17px;
    width: 100%;
  }
`


const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 146px;
  width: 60%;

  @media (max-width: 950px) {
    flex-direction: column;
    width: 80%;
  }
`

const Item = styled.li`
  width: 346px;
  border: 1px dashed #CECECE;
  backdrop-filter: blur(2px);
  border-radius: 4px;
  padding: 30px;

  @media (max-width: 950px) {
    width: 100%;
    margin-bottom: 20px;
  }
`

const ContentButton = styled.button`
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  color: #000000;
  display: flex;
  align-items: center;
  margin-bottom: 140px;
  overflow: hidden;

  padding: 10px 20px;
  border: 1px solid #D8D7D7;

  span {
    margin-right: 10px;
  }

`

const ItemTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 155%;
  color: #111827;
  margin-bottom: 10px;
  margin-top: 10px;
`


const ItemText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 155%;
  display: flex;
  align-items: center;
  color: #111827;
  padding-right: 14px;
`

const Wrapper = styled.div`
  width: 66%;
  display: flex;
  flex-direction: column;
  align-items: center;


  @media (max-width: 950px) {
    width: 80%;
    margin-bottom: 20px;
  }
`

const WrapperList = styled.ul`
  list-style: none;
  display: flex;
  jusrify-content: space-between;
  width: 100%;
  margin-top: 23px;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`

const WrapperItem = styled.li`  
  border: 1px dashed #CECECE;
  flex: 1 1;
  padding: 30px;
  padding-top: 42px;
  poadding-bottom: 73px;

  @media (max-width: 950px) {
    margin-bottom: 20px;
  }
`

const WrapperTitle = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 155%;
  margin-bottom: 6px;
  margin-top: 20px;
`

const WrapperText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #A1A1AA;
  margin-bottom: 20px;
`

const InfoList = styled.ul`
  list-style: inside;
  list-style-position: inside;
`

const TextDecor = styled.span`
  color: #666666;
`

const InfoItem = styled.li`
  

`

export default {
  Container,
  Title,
  Text,
  List,
  Item,
  ContentButton,
  ItemTitle,
  ItemText,
  Block,
  Wrapper,
  WrapperList,
  WrapperItem,
  WrapperTitle,
  WrapperText,
  InfoList,
  InfoItem,
  TextDecor
}
