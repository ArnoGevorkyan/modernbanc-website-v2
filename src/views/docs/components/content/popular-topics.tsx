import Link from 'next/link';
import React from 'react'
import styled from 'styled-components'


// create a styled component card that takes up the full width of its parent
// all cards should be the same height and width
// it should have a lightgrey border and on hover it should have a #6e79d6 border
// there is an icon, title, and description. the icon should be 1.5rem and the title and description should be 1rem
// the icon should be indigo and the title and description should be black
// they should all be left aligned

const PopularTopicsCard = styled.div`
  display: block;
  text-align: left;
  padding: 1.5rem 1.25rem;
  margin: .5rem 0;
  border: 1px solid lightgray;
  border-radius: 0.25rem;
  width: 100%;
  height: 100%;
  min-width: 300px;
  max-width: 645.41px;
  & > * {
    text-align: left;
  }
  &:hover {
    border: 1px solid #6e79d6;
  }

  // make all icons the same color
  svg {
    color: #6e79d6;
    width: 1.5rem;
    height: 1.5rem;
  }

  /* box-shadow: 8px -8px lightgray;
  &:hover {
    box-shadow: 8px -8px #6e79d6;
  } */
`


type TPopularTopicsProps = {
  title?: string
  description?: string
  link?: string
  icon?: JSX.Element
};

export const PopularTopics: React.FC<TPopularTopicsProps> = ({ icon, title, description, link }: TPopularTopicsProps) => {
  
  const content = (
    <>
      <PopularTopicsCard>
        {icon}
        <h4>{title}</h4>
        <p>{description}</p>
      </PopularTopicsCard>
    </>
  )
  return (
    <>
      {link ? (
        <Link href={link} passHref>
          {content}
        </Link>
      ) : (
        content
      )}
    </>
  )
}

export default PopularTopics