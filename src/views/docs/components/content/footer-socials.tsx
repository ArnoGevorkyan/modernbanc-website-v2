import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { EyeIcon, CursorClickIcon } from '@heroicons/react/outline'

import { FaTwitter } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'

// anchor the items to the right of the parent
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 3rem;
  & > * {
    margin-left: 1rem;
  }
`

const TwitterIcon = styled.div`
  display: inline-block;
  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: #6e79d6;
    &:hover {
      color: #1da1f2;
    }
  }
`

const MailIcon = styled.div`
  display: inline-block;
  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: #6e79d6;
    &:hover {
      color: #4b539b;
    }
  }
`

export const FooterSocials: React.FC = () => {
  return (
    <>
      <Container>
        <TwitterIcon>
          <Link href={`#`}>
            <FaTwitter />
          </Link>
        </TwitterIcon>

        <MailIcon>
          <Link href={`#`}>
            <MdMail />
          </Link>
        </MailIcon>
      </Container>
    </>
  )
}

export default FooterSocials
