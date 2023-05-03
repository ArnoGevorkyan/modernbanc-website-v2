import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > * {
    margin: 1rem;
  }
`

type TPopularTopicsContainerProps = {
  children?: React.ReactNode
};

export const PopularTopicsContainer: React.FC<TPopularTopicsContainerProps> = ({children}) => {
  
  return (
    <>
      <Container>
        {children}
      </Container>
    </>
  )
}

export default PopularTopicsContainer
