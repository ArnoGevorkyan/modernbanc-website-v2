import styled from 'styled-components'
import { down, up } from 'styled-breakpoints'

const Card = styled.div.attrs((props: { center: boolean }) => props)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 363.33px;
  padding: 12px 12px 20px;
  gap: 10px;
  border: 1.34193px solid #e4e4e4;
  border-radius: 2.68385px;
`

const CardTitleAreaContainer = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: baseline;
`

const CardTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  white-space: nowrap;
  /* identical to box height, or 111% */
  display: flex;
  align-items: flex-start;
  text-align: left;

  /* MDB/Gray/800 */
  color: #111827;

  flex: 10;
`

const CardDescription = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  padding-left: 29px;

  /* or 24px */

  /* MDB/Gray/800 */
  color: #111827;
`

const CardIconContainer = styled.div.attrs((props: { color: string }) => props)`
  display: flex;
  align-items: flex-start;
  padding: 3.5px 0px;
  gap: 10px;

  width: 28px;
  height: 27px;

  /* move down 3px */
  transform: translateY(1px);

  & > svg {
    color: ${(props) => props.color || '#D4D4D8'};
    top: 0;
    left: 0;
  }

  flex: 1;
`

const CardBadge = styled.div.attrs((props: { color: string }) => props)`
  display: flex;
  /* flex-direction: row; */
  align-items: flex-end;
  padding: 4px 8px;
  gap: 13.42px;

  width: 24px;
  height: 27px;

  /* MDB/Gray/250 */
  background: #ebebeb;
  border-radius: 5.36771px;

  /* Inside auto layout */
  flex: 1;
  order: 1;
  flex-grow: 0;

  top: 0;
  right: 0;
`

const CardBadgeText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  font-feature-settings: 'kern' off;
  color: #374151;
`

const CardUnorderedList = styled.ul`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 155%;
  color: #71717a;
  & > li {
    /* padding-left: 25px; */
    list-style: inside;
    display: list-item;
  }
`

export default {
  Card,
  CardTitle,
  CardTitleAreaContainer,
  CardDescription,
  CardIconContainer,
  CardBadge,
  CardBadgeText,
  CardUnorderedList
}
