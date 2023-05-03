import styled from 'styled-components'
import { down, up } from 'styled-breakpoints'

export const Container = styled.section.attrs((props: { center: boolean }) => props)`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  gap: 25px;
  margin-top: 50px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 150%;
  text-align: center;
  color: #000000;

  ${down('sm')} {
    font-size: 30px;
    text-align: left;
  }
`

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12.9244px 18.0941px;
  gap: 18.09px;
  border-radius: 5.16974px 5.16974px 0px 0px;

  ${down('sm')} {
    padding: 12px 0;
    flex-direction: row-reverse;
  }
`

export const SubtitleIconContainer = styled.div`
  width: 39.18px;
  height: 29.46px;
`

export const Subtitle = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: #1f2937;
  ${down('sm')} {
    font-size: 16px;
  }
`

export const CardContainer = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(511px, 2fr)); */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
  max-width: 800px;
  ${down('sm')} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const SolutionContactUsButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px 8px 15px 10px;
  gap: 6px;

  width: 100%;
  max-width: 1112px;

  border: 1px solid #e4e4e4;
  border-radius: 2px;
  cursor: default;
`

export const SolutionContactUsButtonText = styled.h3.attrs((props: { color: string }) => props)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: ${(props) => props.color || 'black'};
`
