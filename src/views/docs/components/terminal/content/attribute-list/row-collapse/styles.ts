import styled from 'styled-components'

const Description = styled.span`
  margin-top: 4px;
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #71717a;
`

const ExtraData = styled.div`
  /* padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px; */
`

const EnumValues = styled.span`
  margin-top: 4px;
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: -0.04;
  color: #374151;
`

const AttributesContainer = styled.div`
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default { Description, ExtraData, AttributesContainer, EnumValues }
