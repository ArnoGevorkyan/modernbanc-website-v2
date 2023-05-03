import styled from 'styled-components'

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 10px;
`

const Label = styled.label`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #7a7a7a;
`

const InputContainer = styled.div`
  display: flex;
  border-radius: 3.6px;
  padding: 1px; /* padding decides perceived border width*/
  background: linear-gradient(93.28deg, rgba(165, 165, 165, 0) 24.05%, rgba(98, 97, 97, 0.35) 33.2%, rgba(165, 165, 165, 0) 44.2%),
    linear-gradient(0deg, #cfcfcf, #cfcfcf);
  :focus-within {
    background: black;
  }
  transition: all 150ms ease-out;
`
const Input = styled.input`
  background: #f0f0f0;
  width: 100%;
  height: 36px;
  padding: 0 10px;
  font-size: 14px;
  border-radius: 3px;
  font-weight: 400;
  color: #111827;
  ::placeholder {
    color: #7a7a7a;
  }
  :focus {
    border: none;
    outline: none;
  }
`

export default { Container, Label, InputContainer, Input }
