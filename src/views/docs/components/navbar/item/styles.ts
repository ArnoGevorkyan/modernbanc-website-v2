import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button.attrs((props: { level: number }) => props)`
  display: flex;
  flex-direction: row;
  font-family: 'Inter';
  align-items: center;
  text-decoration: none;
  height: 40px;
  width: 100%;
  color: #3d3d3d;
  color: ${(props) => (
    props.level === 0 ? '#3d3d3d' :
    props.level === 1 ? '#a1a1a1' :
    ''
  )};    
  font-size: 14px;
  line-height: 155%;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-left: 2px solid transparent;
  &:hover {
    color: #111827;
    transition: color 0.5s ease;
  }
  &.is_active {
    color: #111827;
    border-left: 2px solid #111827; 
    background: linear-gradient(90deg, rgba(195,195,195,0.40798326166404064) 0%, rgba(250,250,250,1) 3%); 
  }
  a {
    padding-left: ${(props) => {
      if (props.level === 0) {
        return '28px'
      } else if (props.level === 1) {
        return '58px'
      }
    }};
  }
  svg {
    margin-left: 12px;
    margin-top: 2px;
  }
`

export const ChildrenItemsContainer = styled.div.attrs((props: { level: number }) => props)`
  display: flex;
  width: 100%;
  flex-direction: column;
`
