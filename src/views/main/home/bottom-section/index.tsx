import * as S from './styles'
// import * as I from '../icons'
import MainButton from '../main-button'
import Button from '../button'
import { BookOpenIcon, MailIcon } from '@heroicons/react/solid'
import { CareersButtonIcon } from '../icons'
import { RefObject, useState } from 'react'
import RequestAccessDialog from '../request-access-dialog/request-access-dialog.comp'
type TBottomSectionProps = {
  id?: string
  inner_ref?: RefObject<HTMLDivElement>
}

const BottomSection = ({ id, inner_ref }: TBottomSectionProps) => {
  const [is_open, setIsOpen] = useState(false)

  return (
    <S.SectionContainer id={id} ref={inner_ref}>
      {/* <S.BottomTitle>Accounting software suite for developers</S.BottomTitle>
      <S.RequestAccessButtonContainer>
        <RequestAccessDialog
          is_open={is_open}
          setIsOpen={setIsOpen}
          trigger={<MainButton onClick={() => setIsOpen(true)} title="Request access" />}
        />
      </S.RequestAccessButtonContainer>
       */}
      <S.BottomButtonContainer>
        <Button
          icon={<CareersButtonIcon />}
          center
          text_color="black"
          title="Passionate about your craft? We’re hiring!"
          href="https://modernbanc.notion.site/Careers-a2a7b41b0c62426c9123b37b626e0390"
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
