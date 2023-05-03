import { auth_cookie_name, TPageProps } from '~/pages/_app'
import { LockClosedIcon } from '@heroicons/react/solid'
import { TextInput } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Cookies from 'universal-cookie'
import S from './styles'
import CryptoJS from 'crypto-js'

type TFormValues = {
  password: string
}

export const LockScreen = (props: TPageProps) => {
  const router = useRouter()

  const form = useForm<TFormValues>({
    initialValues: {
      password: ''
    },
    validationRules: {
      password: (password) => password !== ''
    }
  })

  useEffect(() => {
    form.resetErrors()
  }, [form.values?.password])

  const submit = async ({ password }: typeof form.values) => {
    const cookies = new Cookies()

    const hash = CryptoJS.HmacSHA256(password, 'dnk')
    const hash_base_64 = CryptoJS.enc.Base64.stringify(hash)
    cookies.set(auth_cookie_name, hash_base_64, {
      path: '/'
    })

    router.reload()
  }
  return (
    <S.Container>
      <S.Card>
        <S.Title>Enter the password to proceed</S.Title>
        <S.Form onSubmit={form.onSubmit(submit)}>
          <TextInput
            autoFocus
            tabIndex={0}
            icon={<LockClosedIcon color="#D4D4D8" height={16} width={16} />}
            variant="filled"
            placeholder="Enter password"
            mr="12px"
            styles={{
              root: {
                width: '100%'
              },
              error: {
                // color: ""
              },
              invalid: {
                color: '#111827'
              },
              required: {
                color: '#111827'
              },
              input: {
                height: '36px',
                minHeight: '36px',
                background: '#EFEFEF !important',
                color: '#111827',
                borderRadius: '4px',
                border: '1px solid #DCDCDC',
                width: '100%',
                transition: '100ms ease-out',

                ':focus': {
                  outline: '2px solid transparent !important',
                  outlineOffset: '2px !important',
                  borderColor: '#818CF8 !important',
                  boxShadow: '0 0 0 3px #EEF2FF !important'
                },
                ':hover': {
                  borderColor: '#818CF8'
                }
              }
            }}
            {...form.getInputProps('password')}
          />
          <S.Button type="submit">Submit</S.Button>
        </S.Form>
      </S.Card>
    </S.Container>
  )
}
