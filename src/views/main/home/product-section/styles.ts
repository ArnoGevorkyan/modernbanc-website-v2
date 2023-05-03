import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const SectionContainer = styled.section.attrs((props: { center: boolean }) => props)`
  height: 100%;
  width: 80%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  ${down('lg')} {
    padding-bottom: 200px;
  }
  ${down('md')} {
    padding-bottom: 100px;
  }
  ${down('sm')} {
    padding-bottom: 50px;
  }

  /* border: 2px solid red; */
  margin-top: 130px;
`

export const Title = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 150%;
  text-align: center;
  color: #1f2937;
  /* margin: 0 0 40px 0; */
  margin-bottom: 40px;
  ${down('sm')} {
    font-size: 28px;
  }
`
export const Subtitle = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #a1a1aa; /* MDB/Gray/400 */
  margin-bottom: 8px;

  ${down('sm')} {
    font-size: 17px;
  }
`

export const SectionCommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px 4px 0px 0px;
  padding: 10px 14px;
  gap: 14px;
  width: 100%;
  height: 49.8px;
  margin-top: 60px;
`
export const SectionIconContainer = styled.div`
  width: 40px;
  height: 29.8px;
`
export const SectionComment = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 6px 0px 0px;

  width: 288px;
  height: 29.01px;
  white-space: nowrap;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #1f2937;
  text-decoration-line: underline;
  text-decoration-color: #d9d9d9;
  text-decoration-thickness: 1.01px;
  text-underline-offset: 6px;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 25px;
  align-items: center;
  width: 100%;
  /* height: 100%; */
  flex-wrap: wrap;
  ${down('lg')} {
    justify-content: center;
  }
`
export const CardContainerComment = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  padding: 15px;
  gap: 15px;
  /* align-items: center; */
  width: 100%;
  /* height: 100%; */
  flex-wrap: wrap;
  ${down('lg')} {
    justify-content: center;
  }
`
