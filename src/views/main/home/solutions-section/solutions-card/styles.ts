import styled from 'styled-components'
import { down, up } from 'styled-breakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 25px;
  gap: 12px;
  /* max-width: 510.5px; */
  border-top: 1.34193px solid #e4e4e4;
  border-left: 1.34193px solid #e4e4e4;

  &:nth-child(-n + 2) {
    border-top: none;
  }
  &:nth-child(odd) {
    border-left: none;
  }

  ${down('sm')} {
    padding: 25px 0px;
    border-left: none;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 2px;
`

export const CardTitleText = styled.h5`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  line-height: 155%;
  text-decoration: underline 1.31px #d9d9d9;
  text-underline-offset: 6px;
  /* MDB/Gray/800 */
  color: #111827;
`

export const CardIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 4px;

  svg {
    color: #d4d4d8;
  }
`

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 27px;
  height: 27px;
`

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 20px 0px 0px;
  gap: 12px;
`

export const CardText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 155%;

  /* or 25px */
  display: flex;
  align-items: center;

  /* MDB/Gray/800 */
  color: #111827;
`
