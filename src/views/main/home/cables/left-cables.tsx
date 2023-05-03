import styled, { keyframes } from 'styled-components'

const Square = styled.circle`
  z-index: 50;
  width: 15px;
  height: 15px;
  border-radius: 1.5px;
  color: black;
`

export default () => (
  <svg width="932" height="206" viewBox="0 0 932 206" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      id="path1"
      fill="none"
      d="M931.398 2.86316H871.743C866.22 2.86316 861.743 7.34031 861.743 12.8632V129.72C861.743 135.243 857.266 139.72 851.743 139.72H0.398438"
      stroke="#DDDDDD"
      strokeWidth="4"
    />
    <path
      d="M931.398 32.9534L911.943 32.9532L897.426 32.9533C891.903 32.9534 887.426 37.4305 887.426 42.9533V159.81C887.426 165.333 882.949 169.81 877.426 169.81H0.398438"
      stroke="#DDDDDD"
      strokeOpacity="0.6"
      strokeWidth="4"
    />
    <path
      d="M931.401 66.3744H920.361C914.838 66.3744 910.361 70.8515 910.361 76.3744V193.215C910.361 198.744 905.874 203.224 900.345 203.215L0.398438 201.726"
      stroke="#DDDDDD"
      strokeOpacity="0.3"
      strokeWidth="4"
    />
  </svg>
)
