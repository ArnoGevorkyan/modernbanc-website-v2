import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const SectionContainer = styled.section.attrs((props: { center: boolean }) => props)`
  width: 88%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 25px;
  padding-top: 100px;
  margin-top: -10px;
  /* margin-bottom: 13.5px; */
`

export const BottomTitle = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 150%;
  text-align: center;

  color: #000000;
`
export const RequestAccessButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 100px;
  padding-bottom: 50px;
`

export const BottomButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  /* padding: 30px 35px; */
  gap: 20px;
  border-top: 3.58px solid #f2f2f2;
  .button {
    width: 100%;
  }

  ${down('xl')} {
    flex-direction: column;
  }
`
export const TermsPrivacyContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  gap: 20px;
  @media (max-width: 950px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`
