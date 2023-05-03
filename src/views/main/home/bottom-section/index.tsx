import * as S from './styles'
// import * as I from '../icons'
import MainButton from '../main-button'
import Button from '../button'
import { BookOpenIcon, MailIcon } from '@heroicons/react/solid'
import { CareersButtonIcon, BookIcon } from '../icons'
import { RefObject, useState } from 'react'
type TBottomSectionProps = {
  id?: string
  inner_ref?: RefObject<HTMLDivElement>
}

const BottomSection = ({ id, inner_ref }: TBottomSectionProps) => {
  const [is_open, setIsOpen] = useState(false)

  return (
    <S.SectionContainer id={id} ref={inner_ref}>
      <S.BottomButtonContainer>
        <Button
          icon={<BookIcon />}
          center
          text_color="black"
          title="Modernbanc Blog"
          href="/blog"
          special_btn={true}
        />
        <Button
          icon={<CareersButtonIcon />}
          center
          text_color="black"
          title="Passionate about your craft? We’re hiring!"
          href="https://modernbanc.notion.site/Careers-a2a7b41b0c62426c9123b37b626e0390"
          special_btn={true}
        />
        <S.TermsPrivacyContactContainer>
          <Button icon={<BookOpenIcon width={16} />} title="Terms" href="/terms" />
          <Button icon={<BookOpenIcon width={16} />} title="Privacy" href="/privacy" />
          <Button icon={<MailIcon width={16} />} title="Contact us" href="mailto:hello@modernbanc.com" />
        </S.TermsPrivacyContactContainer>
      </S.BottomButtonContainer>
    </S.SectionContainer>
  )
}

export default BottomSection
