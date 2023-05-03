import React from 'react'
import styled from 'styled-components'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'

const Container = styled.div`
  overflow-x: auto;
  display: flex;
  ::-webkit-scrollbar {
    display: none;
  }
`

const Line = styled.div`
  /* display: table-row; */
`
const Pre = styled.pre`
  font-size: 13px;
  padding-top: 8px;
  padding-bottom: 8px;
  line-height: auto;
  width: 100%;
`

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 8px;
  padding-left: 10px;
  user-select: none;
  font-weight: 500;
  color: #cbcbcb;
`

const LineContent = styled.span`
  display: table-cell;
`

type TCustomCodeBlockProps = {
  language: Language
  code: string
}

const CustomCodeBlock2 = ({ code, language }: TCustomCodeBlockProps) => (
  <Container className="prism-code" /* to know when to assign css */>
    <Highlight {...defaultProps} theme={undefined} code={code.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  </Container>
)

export default CustomCodeBlock2
