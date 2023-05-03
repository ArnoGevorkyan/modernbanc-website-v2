import styled from 'styled-components'

export const Container = styled.div`
  /* overflow: auto; */
  /* position: relative; */
  width: 100%;
  code {
    width: 100% !important;
    flex-shrink: 10;
    position: relative;
    font-family: 'Roboto Mono', monospace;
    .word {
      background-color: #eef2ff;
    }
    .highlighted {
      /* opacity: 0.5; */
      background-color: #eef2ff;
    }
    counter-reset: line;
  }

  .line {
    width: 100%;
  }

  // Hack to make things aligned, instead of line numbers show invisible spaces
  pre > code > .line::before {
    content: ' ';
    font-size: 13px;
    font-weight: 500;
    text-align: right;
    color: transparent;
    margin-left: 2px;
  }

  // With line numbers
  code[data-line-numbers] > .line::before {
    counter-increment: line;
    content: counter(line);
    display: inline-block;
    width: 1rem;
    margin-right: 8px;
    color: #cbcbcb;
    margin-left: 10px;
  }

  // hack to hide plugin's default title as it's ugly.
  div[data-rehype-pretty-code-title] {
    display: none;
  }

  pre > code {
    display: grid;
  }
`

export const PreBlock = styled.pre`
  font-size: 13px;
  padding-top: 8px;
  padding-bottom: 8px;
  line-height: auto;
  width: 100% !important;
  max-height: 700px;
`

export const CopyButtonContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`
