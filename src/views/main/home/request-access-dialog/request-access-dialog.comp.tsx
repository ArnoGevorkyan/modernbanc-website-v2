import { CheckIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import * as Dialog from '@radix-ui/react-dialog'
import { useControllableState } from '@radix-ui/react-use-controllable-state'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import MainButton from '../main-button'
import Input from './input/input.comp'
import S from './request-access-dialog.styles'
import Toast from './toast/toast.comp'
import axios from 'axios'


type TRequestAccessDialog = {
  trigger: React.ReactNode
  is_open?: boolean
  setIsOpen?: (is_open: boolean) => void
}

type TFormData = { email: string; how: string }

const RequestAccessDialog = ({ trigger, ...props }: TRequestAccessDialog) => {
  const [is_open = false, setIsOpen] = useControllableState({
    prop: props.is_open,
    onChange: props.setIsOpen
  })
  const form = useForm<TFormData>()

  async function onSubmit(data: TFormData) {
    setIsOpen(false)
    const result = await axios.post('/zapier/hooks/catch/8360739/bqct2w4/', data)
    if (result.status === 200) {
      toast.custom(() => <Toast type="success" />)
    } else {
      toast.custom(() => <Toast type="error" />)
    }
  }

  return (
    <>
      <Dialog.Root open={is_open} onOpenChange={setIsOpen}>
        <S.Trigger asChild>{trigger}</S.Trigger>
        <Dialog.Portal>
          <S.Overlay />
          <S.Content
            onOpenAutoFocus={(event) => {
              event.preventDefault()
              form.setFocus('email')
            }}
          >
            <S.Header>
              <S.HeaderTitle>Request access</S.HeaderTitle>
              <S.HeaderRightPart>
                <Dialog.Close asChild>
                  <S.CloseIconContainer>
                    <XIcon />
                  </S.CloseIconContainer>
                </Dialog.Close>
              </S.HeaderRightPart>
            </S.Header>
            <S.Border />
            <S.Body>
              <S.Form onSubmit={form.handleSubmit(onSubmit)}>
                <Input
                  label="Work email"
                  placeholder="Work email"
                  form_register={form.register('email', {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                <Input
                  label="How do you currently manage your accounting?"
                  placeholder="E.g Quickbooks, Xero, Netsuite, Excel"
                  form_register={form.register('how', {
                    required: true
                  })}
                />
                <MainButton style={{ width: '100%', height: '46px', fontSize: '16px', borderRadius: '2px' }} title="Request access" />
              </S.Form>
            </S.Body>
          </S.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

export default RequestAccessDialog
