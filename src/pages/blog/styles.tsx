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

export default { Container, Filters }
