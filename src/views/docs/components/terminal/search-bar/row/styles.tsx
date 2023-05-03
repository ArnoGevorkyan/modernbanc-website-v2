import styled from 'styled-components'
export const Container = styled.div`
  width: 100%;
  flex-grow: 0;
`

export const SchemaRow = styled.div`
  display: flex;
  border-radius: 4;
  align-items: center;
  cursor: pointer;
`

export const SchemaRowTitle = styled.div`
  font-size: 13px;
  color: #111827;
  font-weight: 400;
  flex-shrink: 0;
`

export const SchemaRowDescription = styled.div`
  margin-left: 6px;
  font-size: 13px;
  color: #a1a1aa;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 1;
`
export const SchemaIconContainer = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ededed;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`

export const OperationRow = styled.div`
  display: flex;
  border-radius: 4;
  align-items: center;
  cursor: pointer;
`

export const OperationRowMethodContainer = styled.div`
  height: 24px;
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 4px 6px;
  margin-right: 6px;
`

export const OperationRowMethodText = styled.div`
  font-size: 12px;
  line-height: 15px;
  font-weight: 500;
  color: #374151;
  letter-spacing: 0.01em;
  text-transform: uppercase;
`

export const OperationPathText = styled.div`
  font-size: 13px;
  color: #111827;
  font-weight: 400;
  line-height: 16px;
`

export const OperationRowTitle = styled.div`
  margin-left: 6px;
  font-size: 13px;
  color: #a1a1aa;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
