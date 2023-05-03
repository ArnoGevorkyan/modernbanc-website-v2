import { ContactUsIcon } from '~/components/icons/contactus-icon'
import RequestAccessDialog from '~/views/main/home/request-access-dialog/request-access-dialog.comp'
import S from './styles'

const RequestAccessButton = () => {
  return (
    <RequestAccessDialog
      trigger={
        <S.Button className="button">
          <span>Request access</span>
          <S.IconContainer>
            <ContactUsIcon />
          </S.IconContainer>
        </S.Button>
      }
    />
  )
}

export default RequestAccessButton
