import { down } from 'styled-breakpoints'
import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  height: 100%;
  width: 100%;
  background: linear-gradient(265.32deg, #c5c5c5 0%, rgba(197, 197, 197, 0.3) 16.4%, rgba(197, 197, 197, 0) 46.12%, rgba(197, 197, 197, 0.3) 98.39%),
    #fafafa;
  padding: 140px 0 50px 0;
  ${down('xxl')} {
    padding: 80px 0 50px 0;
  }
  ${down('sm')} {
    padding: 100px 0 50px 0;

    position: relative;
    overflow: hidden;
  }
`

export const Title = styled.span`
  font-size: 56px;
  font-weight: 600;
  line-height: 150%;
  max-width: 780px;
  letter-spacing: 0rem;
  font-family: 'Inter', sans-serif;
  text-align: center;
  padding-top: 26px;

  ${down('xl')} {
    max-width: 700px;
  }
  ${down('sm')} {
    text-align: left;
    font-size: 24px;
    line-height: 100%;
  }
`

export const TitleDecor = styled.span`
color: #666666;
` 

export const Subtitle = styled.span`
  text-align: center;
  color: #111827;
  gap: 16px;
  margin-top: 25px;
  letter-spacing: 0.02rem;
  margin-bottom: 35px;
  font-size: 22px;
  width: 756px;
  max-width: 858px;
  line-height: 160%;

  ${down('sm')} {
    font-size: 16px;
    line-height: 120%;
    width: auto;
    text-align: left;
    display: flex;
    flex-direction: column;
    
    span {
      margin-bottom: -15px;
    }
  }
`

export const HighlightedText = styled.span`
  color: #a1a1aa;
`

export const ComputerAndCablesContainer = styled.div`
  margin-bottom: 25px;
  ${down('xl')} {
    margin-bottom: 0;
    transform: scale(0.76);
  }
  ${down('xxl')} {
    margin-bottom: 0;
    transform: scale(0.9);
  }
  ${down('sm')} {
    display: none;
    visibility: hidden;
  }
`

export const shine = keyframes`
  from {
    background-position: -250% center;
  }
  to {
    background-position: 150% center;
  }
`
export const LeftCablesContainer = styled.div`
  position: relative;
  margin-left: 15%;
  ${down('xl')} {
    margin-left: -28%;
  }
  ${down('lg')} {
    margin-left: -35%;
  }
  ${down('md')} {
    margin-left: -50%;
  }
  ${down('sm')} {
    display: none;
  }

  &:after {
    content: '';
    z-index: -1;
    position: absolute;
    border-radius: 12px;
    top: -1px;
    opacity: 1;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    animation: ${shine} 6s ease forwards 3.5s infinite;
    background-size: 200% auto;
  }

  &:before {
    content: '';
    z-index: -1;
    position: absolute;
    border-radius: 12px;
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    /* box-shadow: 0 0 0 1px transparent; */
    animation: border 1s linear forwards 0.5s;
  }
`
export const RightCablesContainer = styled.div`
  margin-left: 28.31px;
  z-index: -4;

  ${down('sm')} {
    display: none;
  }
`

export const Section = styled.section`
  width: 80%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`