import { CurrencyDollarIcon } from '@heroicons/react/solid'
import styled, { keyframes } from 'styled-components'
import { down } from 'styled-breakpoints'

const Container = styled.div`
  width: 66%;
  backdrop-filter: blur(2px);
  border-radius: 2px;
  margin-top: 46px;

  @media (max-width: 1200px) {
    width: 80%;
  }
`

const Selectors = styled.section`
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-bottom: 13px;

  @media (max-width: 950px) {
    flex-direction: column-reverse;
  }
`

const Button = styled.button`
  border: 1px dashed #D7D7D7;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #000000;
  text-shadow: 0px 4px 16px rgba(255, 255, 255, 0.45);
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
`

const ButtonText = styled.span`
  margin-top: 13px;
`

const Block = styled.div`
  border: 1px dashed #D7D7D7;
  padding: 23px 0;
  width: 54%;
  padding-left: 27px;

  @media (max-width: 950px) {
    width: 100%;
    margin-bottom: 20px;
  }
`

const Title = styled.h3`
  font-weight: 500;
  font-size: 18px
  line-height: 22px;
  color: #000000;
  text-shadow: 0px 4px 16px rgba(255, 255, 255, 0.45);
  margin-bottom: 12px;
`

const Text = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #111827;
`

const Content = styled.div.attrs((props: { left: string; }) => props)`
  padding-left: 3%;
  border-right: 1px dashed #D7D7D7;
  border-bottom: 1px solid #D7D7D7;

  display: flex;
  justify-content: space-between;
  background: #F0F0F0;
  overflow: hidden;

  min-height: 503px;

  .content-image {
    height: 100%;
    margin-top: auto;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    height: 492px;

    .content-image {
      height: auto;
      margin-left: auto;
    }
  }

`


const ContentTitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 155%;
  color: #111827;
  margin-top: 69px;
  margin-bottom: 30px;

  @media (max-width: 950px) {
    font-size: 24px;
    line-height: 100%;
    margin-top: 30px;
  }
`

const List = styled.ul`
  list-style: inside;
  list-style-position: inside;
  margin-bottom: 30px;
`

const Item = styled.li`
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  color: #111827;
  margin-bottom: 10px;

  @media (max-width: 950px) {
    font-size: 14px;
    line-height: 105%;
  }
`

const ContentButton = styled.button`
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  color: #000000;
  display: flex;
  align-items: center;
  // margin-bottom: 140px;
  overflow: hidden;

  padding: 10px 20px;
  border: 1px solid #D8D7D7;

  span {
    margin-right: 10px;
  }


  @media (max-width: 950px) {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);

    background: #373737;
    border: 3px solid #CCCCCC;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    color: #ffffff;

    width: 90%;
    display: flex;
    justify-content: center;
  }

`

export default {
  Container,
  Button,
  Block,
  Title,
  Text,
  ButtonText,
  Selectors,
  Content,
  ContentTitle,
  List,
  Item,
  ContentButton
}
