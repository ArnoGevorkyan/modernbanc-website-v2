import styled from 'styled-components'
import { down } from 'styled-breakpoints'
export const Columns = styled.div`
  width: 100%;
  display: grid;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  gap: 30px;
`

export const Column = styled.div`
  display: flex;
  flex: 1 1 0;
  /* width: 100%; */
  flex-direction: column;
  > * {
    margin: 0 !important;
  }
`

export const ColumnsNew = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 40px;


  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`

export const ColumnNew = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between;
  align-items: flex-start; */
  > * {
    margin: 0 !important;
  }
`