import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai'

const Header = styled.div`
  display: block;
  height: 36px;
  border-radius: 4;
  background-color: #f4f4f4;
  border: 1px solid #ebebeb;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  padding-left: 8px;
  padding-right: 8px;
  transition: 100ms ease-in-out;
  justify-content: space-between;
  text-align: left;

  & > * {
    display: inline-block;
  }

  :hover {
    box-shadow: 0px 0px 8px rgba(110, 121, 214, 0.15);
  }
`
const Title = styled.span`
  display: inline-block;
  margin-left: 8px !important;
  font-size: 13px;
  line-height: 28px;
  color: #374151;;
  font-weight: 500;
`


type TCollapseContentProps = {
  children: React.ReactNode
  title: string
}

export const CollapseCode: React.FC<TCollapseContentProps> = ({ children, title }) => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <Header onClick={toggleCollapse}>
        {collapsed ? <AiOutlineRight style={{fontSize: '8px'}}/> : <AiOutlineDown style={{fontSize: '8px'}} />}
        <Title>
          {title}
        </Title>
      </Header>
      {!collapsed && <div style={{ marginTop: '0', }}>{children}</div>}
      {/* <div>{children}</div> */}
    </>
  )
}

export default CollapseCode