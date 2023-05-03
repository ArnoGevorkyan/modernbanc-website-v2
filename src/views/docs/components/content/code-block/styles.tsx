import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f6f6f6 !important;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin-top: 8px;
  margin-bottom: 8px;
  position: relative;
  width: 100% !important;
  max-width: 100% !important;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: relative;

  height: 34px;
  width: 100%;
  font-size: 12px;
  border-bottom: solid 1px #eaeaea;
`

export const HeaderLeftPart = styled.div`
  flex-direction: row;
  align-items: center;
  align-items: center;
  height: 100%;
`

export const Title = styled.div`
  display: flex;
  height: 100%;
  padding-left: 8px;
  padding-right: 8px;
  color: #374151;
  font-weight: 500;
  align-items: center;
  line-height: 150%;
  font-size: 12px;
  border-right: solid 1px #eaeaea;
  overflow: hidden;
`

export const CopyButtonContainer = styled.div`
  top: 8px;
  right: 8px;
  position: absolute;
`
