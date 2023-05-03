import styled from 'styled-components'
import { down } from 'styled-breakpoints'
import { HEADER_HEIGHT } from '~/styles/shared'

export const Container = styled.div`
  background: linear-gradient(246.64deg, #efefef 0%, rgba(217, 217, 217, 0.3) 11.48%, rgba(197, 197, 197, 0) 27.7%, rgba(197, 197, 197, 0) 35.19%),
    #fafafa;
  width: 100% !important;
  display: flex;
  direction: column;
  justify-content: center;
`

export const SubContainer = styled.div`
  display: flex;
  width: 100% !important;
  flex-shrink: 100 !important;

  ${down('lg')} {
    max-width: 1440px;
    margin-left: auto;
    margin-right: 'auto';
    padding-left: 0;
  }
`

export const LeftHighlightBorder = styled.div.attrs((props: { show: boolean }) => props)`
  position: fixed;
  left: 0;
  width: 3px;
  height: 40px;
  background-color: #111827;
  border-radius: 2px;
  z-index: 9;

  transition: all 100ms ease-in-out;

  opacity: ${(props) => (props.show ? 1 : 0)};
`

export const BottomRightContainer = styled.div`
  z-index: 8;
  position: fixed;
  right: 25px;
  bottom: 25px;
`
export const Content = styled.main`
  width: 50vw !important;
  margin-bottom: 200px;
  padding-left: 9%;
  /* padding-right: 5%; */
  margin-top: ${HEADER_HEIGHT + 55}px;

  ${down('xl')} {
    /* padding-right: 5%; */
    /* width: 80%; */
  }

  ${down('lg')} {
    width: 100vw !important;
    padding-left: 25px;
    padding-right: 95px;
    margin-top: ${HEADER_HEIGHT + 20}px;
    margin-bottom: 8 0px;
  }

  font-family: 'Inter', sans-serif;

  h1 {
    font-size: 32px;
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
    font-size: 26px !important;
    line-height: 150%;
    font-weight: 700;
    letter-spacing: 0.01em;
    color: #454545;
    font-size: 20px;
  }

  h1,
  h2 {
    ${down('lg')} {
      //This fixes bug where on mobile when you click on ToC item it scrolls too low of h1/h2
      scroll-margin-top: 80px;
    }
  }

  h3 {
    font-size: 22px;
    line-height: 150%;
    font-weight: 700;
    letter-spacing: 0.01em;
    color: #454545;
    margin-top: 20px;
  }

  h4 {
    font-size: 18px;
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

  /* Code in text */
  span > code,
  p > code,
  li > code,
  em > code,
  dd > code,
  strong > code,
  td > code {
    font-family: 'Roboto Mono', monospace;
    letter-spacing: 0;
    line-height: 28px;
    font-size: 13px;
    font-weight: 400;
    color: black;
    background-color: #efefef;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 4px;
    padding-right: 4px;
    white-space: pre-line;
    border-radius: 2px;
    margin: 0;
  }

  strong > code {
    font-family: 'Roboto Mono', monospace;
    letter-spacing: 0;
    line-height: 28px;
    font-size: 13px;
    font-weight: 500;
    font-weight: 500;
    background-color: #efefef;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 6px;
    padding-right: 6px;
    white-space: pre-line;
    border-radius: 2px;
    margin: 0;
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
    font-size: 16px;
    color: #454545;
    font-weight: 400;
    margin: 0;
    > * + * {
      margin-top: 6px;
    }
    li {
      /* list-style-type: disc; */
      ::before {
        content: '•';
        color: #a1a1aa; /* Change the color */
        font-size: 20px;
        line-height: 28px;
        display: inline-block; /* Needed to add space between the bullet and the text */
        align-self: center;
        width: 1em; /* Also needed for space (tweak if needed) */
        margin-left: -1em; /* Also needed for space (tweak if needed) */
      }
    }
  }

  li > p {
    padding: 0;
  }

  ol {
    padding-left: 25px;
    padding-top: 8px;
    font-size: 16;
    line-height: 28px;
    color: #454545;
    font-weight: 400;
    margin: 0;
    counter-reset: my-awesome-counter;
    li {
      counter-increment: my-awesome-counter;
      /* list-style-type: decimal; */
      ::before {
        margin-left: -1em; /* Also needed for space (tweak if needed) */
        content: counter(my-awesome-counter) '.';
        display: inline-block; /* Needed to add space between the bullet and the text */
        width: 1em; /* Also needed for space (tweak if needed) */
        margin-right: 0.5em;
        line-height: 28px;
      }
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
      text-decoration-color: #989fda;
    }
  }

  strong {
    font-weight: 600;
    color: #111827;
  }

  // Plugin wraps all pre's so we have to style that wrapper too.
  div[data-rehype-pretty-code-fragment] {
    position: relative;
    background-color: #f6f6f6 !important;
    overflow: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    :only-child {
      margin-top: 0;
      margin-bottom: 0;
      border-radius: 0px;
      border: none;
    }
  }

  // I was meant to put this in ~/views/docs/pre/ but it didn't work weirdly.
  .custom-code-block .copy-button {
    display: none;
  }
`
