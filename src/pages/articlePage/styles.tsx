import styled from 'styled-components'

const Container = styled.div`
  // background: linear-gradient(265.32deg, #C5C5C5 0%, rgba(197, 197, 197, 0.3) 16.4%, rgba(197, 197, 197, 0) 46.12%, rgba(197, 197, 197, 0.3) 98.39%), #FAFAFA;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 44px;
    padding-bottom: 30px;
    padding-right: 44px;
    padding-left: 60px;
    border: 1px solid #EDEDED;
  }

  .container-wrapper {
    width: 63%;
    margin: 0 auto;
  }
`

const Filters = styled.div`
  display: flex;
  width: 35.69%;
  height: 43px;
  background: #F0F0F0;
  border: 3px solid #EDEDED;
  border-radius: 2px;


  button {
    flex: 1 1;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #A5A5A5;
    height: 36px;
    background: #F0F0F0;
    transition: background 0.5s linear;

    &:hover {
      background: #EAEAEA;
      transition: background 0.5s linear;
    }
  }

  .active {
    background: #EAEAEA;
    border: 1px solid #E7E7E7;
    border-radius: 2px;
    color: #000000;
    text-shadow: 0px 4px 16px rgba(255, 255, 255, 0.45);
  }
`


const Article = styled.div`
  padding-left: 60px;
  border-left: 1px solid #EDEDED;
  border-right: 1px solid #EDEDED;
  border-bottom: 1px dashed #EDEDED;
  position: relative;

  .block {
    margin-bottom: 23px;
  }

  .block-date {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #A1A1AA; 
    margin-right: 10px;
  }

  .block-author {
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #111827;
    border-left: 1px solid #EDEDED;
    padding-left: 10px;
  }

  img {
    margin-bottom: 40px;
  }

  .decor-image {
    position: absolute;
    top: 30px;
    right: 60px;
    width: 140px;
    height: 140px;
  }
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 155%;
  display: flex;
  align-items: center;
  color: #111827;
  padding-top: 55px;
  margin-bottom: 25px;
`

const Text = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #111827;
  width: 600px;
  margin-bottom: 40px;
`


export default { Container, Article, Title, Text, Filters }
