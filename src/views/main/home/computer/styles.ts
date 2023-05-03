import { CurrencyDollarIcon } from '@heroicons/react/solid'
import styled, { keyframes } from 'styled-components'
import { down } from 'styled-breakpoints'

const beam = keyframes`
  from {
    box-shadow: inset 0px 0px 50px rgba(137, 139, 154, 0.28);
  }
  to {
    box-shadow: inset 0px 0px 80px rgba(140, 140, 140, 0.47);
  }
`

const shine = keyframes`
  from {
    background-position: -200% center;
  }
  to {
    background-position: 200% center;

  }
`

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Computer = styled.div`
  position: relative;
  flex-direction: column;
  background: #efefef;
  padding: 27.36px;
  width: 400px;
  margin-left: 15px;
  flex-shrink: 0;
  border: 1.8241px solid #e3e3e3;
  border-radius: 7.29639px;
  right: 30px;
  box-shadow: 14.5928px -14.5928px 0px #e6e6e6, 30px -30px 0px #e7e7e7;

  ${down('sm')} {
    width: 77vw !important;
  }

  &:after {
    content: '';
    background: linear-gradient(90deg, #efefef 0%, #efefef 50%, #f0f0f0 60%, #f0f0f0 65%, #fafafa 75%, #f0f0f0 90%, #efefef 100%);
    /* background: linear-gradient(90deg, #e3e3e3 0%, #e3e3e3 50%, #f0f0f0 60%, #f0f0f0 65%, #fafafa 75%, #f0f0f0 90%, #e3e3e3 100%); */
    z-index: -1;
    position: absolute;
    border-radius: 12px;
    top: -1px;
    opacity: 1;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    animation: ${shine} 9s ease 3.5s infinite;
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
    box-shadow: 0 0 0 1px transparent;
    animation: border 1s linear forwards 0.5s;
  }
`

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const Screen = styled.div`
  height: 220px !important;
  ${down('sm')} {
    height: 150px !important;
  }
  width: 100%;
  animation: ${beam} 2000ms linear infinite alternate;
  background: #fafafa;
  align-items: center;
  border-radius: 7.3px;
  border: 1.82px solid #d5d6da;
`

const Name = styled.div`
  margin-top: -16px;
  width: min-content;
  background: #e4e4e4;
  color: #a1a1aa;
  border-radius: 3.7px;
  padding: 0px 7px;
  padding-top: 3.5px;
  font-size: 20px;
  letter-spacing: 0.06rem;
  align-content: center;
  justify-content: center;
  text-align: center;
  font-weight: 500;
  border: 1.82px solid #efefef;
  transform: translateY(-3px);
`

const TopLeftButtons = styled.div`
  position: relative;
  top: 12.5px;
  left: 12.5px;
  display: flex;
  gap: 5px;
`

const TopLeftButton = styled.div<{ color: string }>`
  width: 10px;
  height: 10px;
  border: 1px solid ${({ color }) => color};
  border-radius: 6px;
`

const ScreenContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CentralSign = styled(CurrencyDollarIcon)`
  width: 65px;
  height: 65px;
  color: #d4d4d8;
  margin-bottom: 5%;
`

const SmallPanel = styled.div`
  margin-top: 28px;
  border: 1.82px solid #d6d6d6;
  border-radius: 3.65px;
  width: 104.93px;
  height: 17.88px;
`
const BigPanel = styled.div`
  margin-top: 18.5px;
  width: 100%;
  height: 43.44px;
  border-radius: 8px;
  border: 1.82px solid #dedede;
`

export default {
  Container,
  Computer,
  ScreenContainer,
  Screen,
  Name,
  SmallPanel,
  BigPanel,
  TopLeftButtons,
  TopLeftButton,
  ScreenContent,
  CentralSign
}
