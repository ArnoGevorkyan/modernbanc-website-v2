import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const SubContainer = styled.div`
  margin-top: 35px;
  .button {
    margin-bottom: 35px;
  }
  max-width: 800px;
`

const Content = styled.div`
  margin-bottom: 200px;

  font-family: 'Inter', sans-serif;

  h1 {
    font-size: 36px;
    line-height: 150%;
    font-weight: 700;
    letter-spacing: 0.01em;
    color: #454545;
    margin-top: 20px;
    + p {
      // add extra padding to <p> if it follows <h1>
      padding-top: 28px;
    }
  }

  h2 {
    font-size: 32px;
    line-height: 150%;
    font-weight: 700;
    letter-spacing: 0.01em;
    color: #454545;
    font-size: 20px;
  }

  h3 {
    font-size: 26px;
    line-height: 150%;
    font-weight: 700;
    letter-spacing: 0.01em;
    color: #454545;
    margin-top: 20px;
  }

  h4 {
    font-size: 20px;
    line-height: 150%;
    font-weight: 700;
    letter-spacing: 0.01em;
    color: #454545;
    margin-top: 20px;
    code {
      font-size: 20px;
      letter-spacing: 0;
      font-weight: 700;
      background: none;
      padding: 0;
    }
  }

  p {
    font-size: 16px;
    line-height: 28px;
    color: #454545;
    font-weight: 400;
    padding-top: 8px;
    padding-bottom: 8px;
    + p {
      // reduce padding to <p> if it follows <p>
      /* padding-top: 0; */
    }
    + ul,
    + ol {
      // Remove padding for <ul> & <ol>  if they're after <p>
      padding-top: 0;
    }
  }

  em {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    margin-top: -8px;
    margin-bottom: -8px;
    letter-spacing: 0.02em;
    display: block;
    color: #6e79d6;
  }

  hr {
    border: none;
    height: 1px;
    background-color: #ebebeb;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  ul {
    overflow: visible;
    padding-left: 25px;
    padding-top: 8px;
    font-size: 16;
    color: #454545;
    font-weight: 400;
    margin: 0;
    > * + * {
      margin-top: 6px;
    }
    li {
      list-style-type: disc;
    }
  }

  li > p {
    padding: 0;
  }

  ol {
    padding-left: 25px;
    padding-top: 8px;
    font-size: 16;
    color: #454545;
    font-weight: 400;
    margin: 0;
    li {
      list-style-type: decimal;
    }
  }

  a {
    color: #252525;
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-decoration-color: #ebebeb;
    text-decoration-skip: ink;
    transition: 100ms ease-in-out;
    font-weight: 500;
    &:hover {
      text-decoration-color: #111827;
    }
  }

  strong {
    font-weight: 600;
    color: #111827;
  }
`

export default { Container, SubContainer, Content }
