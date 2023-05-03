import { useState } from 'react'
import S from './styles'
import Computer from '../computer'
import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

const InfoBlock = ({ children }) => {
  const [active, setActive] = useState();
  const is_mobile = useBreakpoint(down('sm'))


  return (
    <S.Container>
      <S.Block>
        <div className='block-title'>
          <S.Title>Built on a single source of truth.</S.Title>
          <S.Text>Unify your financial data. Automate your payments and financial operations. Build PCI-compliant journeys Modernbanc provides a single fully integrated system to achieve that.</S.Text>
          {is_mobile ? '' : children}
        </div>
        <Computer />
      </S.Block>
      <S.List>
        <S.Item>
          <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.9167 19.25V15.0833C35.9167 13.9783 35.4777 12.9185 34.6963 12.1371C33.9149 11.3557 32.8551 10.9167 31.75 10.9167H10.9167C9.8116 10.9167 8.75179 11.3557 7.97039 12.1371C7.18899 12.9185 6.75 13.9783 6.75 15.0833V27.5833C6.75 28.6884 7.18899 29.7482 7.97039 30.5296C8.75179 31.311 9.8116 31.75 10.9167 31.75H15.0833M19.25 40.0833H40.0833C41.1884 40.0833 42.2482 39.6443 43.0296 38.8629C43.811 38.0815 44.25 37.0217 44.25 35.9167V23.4167C44.25 22.3116 43.811 21.2518 43.0296 20.4704C42.2482 19.689 41.1884 19.25 40.0833 19.25H19.25C18.1449 19.25 17.0851 19.689 16.3037 20.4704C15.5223 21.2518 15.0833 22.3116 15.0833 23.4167V35.9167C15.0833 37.0217 15.5223 38.0815 16.3037 38.8629C17.0851 39.6443 18.1449 40.0833 19.25 40.0833ZM33.8333 29.6667C33.8333 30.7717 33.3943 31.8315 32.6129 32.6129C31.8315 33.3943 30.7717 33.8333 29.6667 33.8333C28.5616 33.8333 27.5018 33.3943 26.7204 32.6129C25.939 31.8315 25.5 30.7717 25.5 29.6667C25.5 28.5616 25.939 27.5018 26.7204 26.7204C27.5018 25.939 28.5616 25.5 29.6667 25.5C30.7717 25.5 31.8315 25.939 32.6129 26.7204C33.3943 27.5018 33.8333 28.5616 33.8333 29.6667Z" stroke="#3F3F46" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <S.ItemTitle>Replace 5+ vendors.</S.ItemTitle>
          <S.ItemText>Store all your data across every payments, financial and accounting.</S.ItemText>
        </S.Item>
        <S.Item>
          <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.1667 17.1667V25.5L31.4167 31.75M43.9167 25.5C43.9167 27.9623 43.4317 30.4005 42.4894 32.6753C41.5471 34.9502 40.166 37.0172 38.4249 38.7582C36.6838 40.4993 34.6168 41.8805 32.342 42.8227C30.0671 43.765 27.6289 44.25 25.1667 44.25C22.7044 44.25 20.2662 43.765 17.9913 42.8227C15.7165 41.8805 13.6495 40.4993 11.9084 38.7582C10.1673 37.0172 8.78619 34.9502 7.84391 32.6753C6.90164 30.4005 6.41666 27.9623 6.41666 25.5C6.41666 20.5272 8.3921 15.7581 11.9084 12.2417C15.4247 8.72544 20.1938 6.75 25.1667 6.75C30.1395 6.75 34.9086 8.72544 38.4249 12.2417C41.9412 15.7581 43.9167 20.5272 43.9167 25.5Z" stroke="#3F3F46" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <S.ItemTitle>Automate hundreds of hours.</S.ItemTitle>
          <S.ItemText>Store all your data across every payments, financial and accounting.</S.ItemText>
        </S.Item>
        <S.Item>
          <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.0849 5.5C36.7534 5.5 36.4354 5.6317 36.201 5.86612C35.9666 6.10054 35.8349 6.41848 35.8349 6.75C35.8349 7.08152 35.9666 7.39946 36.201 7.63388C36.4354 7.8683 36.7534 8 37.0849 8H41.5674L29.5849 19.9825L22.9699 13.365C22.8538 13.2486 22.7158 13.1562 22.564 13.0932C22.4121 13.0302 22.2493 12.9978 22.0849 12.9978C21.9205 12.9978 21.7577 13.0302 21.6058 13.0932C21.4539 13.1562 21.316 13.2486 21.1999 13.365L8.69989 25.865C8.46518 26.0997 8.33331 26.4181 8.33331 26.75C8.33331 27.0819 8.46518 27.4003 8.69989 27.635C8.93461 27.8697 9.25295 28.0016 9.58489 28.0016C9.91683 28.0016 10.2352 27.8697 10.4699 27.635L22.0849 16.0175L28.6999 22.635C28.816 22.7514 28.9539 22.8438 29.1058 22.9068C29.2577 22.9698 29.4205 23.0022 29.5849 23.0022C29.7493 23.0022 29.9121 22.9698 30.064 22.9068C30.2158 22.8438 30.3538 22.7514 30.4699 22.635L43.3349 9.7675V14.25C43.3349 14.5815 43.4666 14.8995 43.701 15.1339C43.9354 15.3683 44.2534 15.5 44.5849 15.5C44.9164 15.5 45.2344 15.3683 45.4688 15.1339C45.7032 14.8995 45.8349 14.5815 45.8349 14.25V6.75C45.8349 6.41848 45.7032 6.10054 45.4688 5.86612C45.2344 5.6317 44.9164 5.5 44.5849 5.5H37.0849ZM39.5849 23C39.2534 23 38.9354 23.1317 38.701 23.3661C38.4666 23.6005 38.3349 23.9185 38.3349 24.25V44.25C38.3349 44.5815 38.4666 44.8995 38.701 45.1339C38.9354 45.3683 39.2534 45.5 39.5849 45.5C39.9164 45.5 40.2344 45.3683 40.4688 45.1339C40.7032 44.8995 40.8349 44.5815 40.8349 44.25V24.25C40.8349 23.9185 40.7032 23.6005 40.4688 23.3661C40.2344 23.1317 39.9164 23 39.5849 23ZM19.5849 28C19.2534 28 18.9354 28.1317 18.701 28.3661C18.4666 28.6005 18.3349 28.9185 18.3349 29.25V44.25C18.3349 44.5815 18.4666 44.8995 18.701 45.1339C18.9354 45.3683 19.2534 45.5 19.5849 45.5C19.9164 45.5 20.2344 45.3683 20.4688 45.1339C20.7032 44.8995 20.8349 44.5815 20.8349 44.25V29.25C20.8349 28.9185 20.7032 28.6005 20.4688 28.3661C20.2344 28.1317 19.9164 28 19.5849 28ZM28.3349 34.25C28.3349 33.9185 28.4666 33.6005 28.701 33.3661C28.9354 33.1317 29.2534 33 29.5849 33C29.9164 33 30.2344 33.1317 30.4688 33.3661C30.7032 33.6005 30.8349 33.9185 30.8349 34.25V44.25C30.8349 44.5815 30.7032 44.8995 30.4688 45.1339C30.2344 45.3683 29.9164 45.5 29.5849 45.5C29.2534 45.5 28.9354 45.3683 28.701 45.1339C28.4666 44.8995 28.3349 44.5815 28.3349 44.25V34.25ZM8.33489 36.75C8.33489 36.4185 8.46659 36.1005 8.70101 35.8661C8.93543 35.6317 9.25337 35.5 9.58489 35.5C9.91641 35.5 10.2344 35.6317 10.4688 35.8661C10.7032 36.1005 10.8349 36.4185 10.8349 36.75V44.25C10.8349 44.5815 10.7032 44.8995 10.4688 45.1339C10.2344 45.3683 9.91641 45.5 9.58489 45.5C9.25337 45.5 8.93543 45.3683 8.70101 45.1339C8.46659 44.8995 8.33489 44.5815 8.33489 44.25V36.75Z" fill="black" />
          </svg>
          <S.ItemTitle>Foundation for infinite growth.</S.ItemTitle>
          <S.ItemText>Store all your data across every payments, financial and accounting.</S.ItemText>
        </S.Item>
      </S.List>

      <S.Wrapper>
        <S.Title>Solving financial software needs from <S.TextDecor>inception</S.TextDecor> to IPO</S.Title>
        <S.WrapperList>
          <S.WrapperItem>
            <svg width="82" height="60" viewBox="0 0 82 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="25.0985" y="27.7554" width="55.0152" height="31.331" rx="2.24446" stroke="url(#paint0_linear_4349_6440)" stroke-width="1.82687" stroke-dasharray="5.53 5.53" />
              <path d="M8.39276 12.631H52.6033V41.0521H8.39276V12.631Z" fill="#E8E8E8" fill-opacity="0.7" />
              <path d="M30.5001 42.4999H8.00012V12.4999H53.0001V42.4999H30.5001Z" stroke="black" stroke-width="1.82687" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M30.5007 52.5H43.0007" stroke="black" stroke-width="3.15789" stroke-linecap="round" />
              <path d="M30.5007 52.4996V42.4996" stroke="black" stroke-width="3.15789" stroke-linecap="round" />
              <path d="M30.498 52.5H17.998" stroke="black" stroke-width="3.15789" stroke-linecap="round" />
              <defs>
                <linearGradient id="paint0_linear_4349_6440" x1="52.6061" y1="26.8419" x2="52.6061" y2="59.9998" gradientUnits="userSpaceOnUse">
                  <stop />
                  <stop offset="1" stop-color="#6C6C6C" />
                </linearGradient>
              </defs>
            </svg>

            <S.WrapperTitle>For startups and small businesses</S.WrapperTitle>
            <S.WrapperText>Use-cases</S.WrapperText>
            <S.InfoList>
              <S.InfoItem>
                See all your bank balances in one place.
              </S.InfoItem>
              <S.InfoItem>
                Easy data available for taxes.
              </S.InfoItem>
              <S.InfoItem>
                Process payroll for your team members.
              </S.InfoItem>
            </S.InfoList>
          </S.WrapperItem>
          <S.WrapperItem>
            <svg width="94" height="60" viewBox="0 0 94 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="24.9343" y="7.75523" width="55.0152" height="31.331" rx="2.24446" stroke="url(#paint0_linear_4349_6456)" stroke-width="1.82687" stroke-dasharray="5.53 5.53" />
              <rect x="3.66928" y="21" width="54" height="32" rx="2" fill="#E8E8E8" fill-opacity="0.7" />
              <path d="M30.6693 45.4375C32.3381 45.4375 33.9694 44.9426 35.3569 44.0155C36.7444 43.0884 37.8259 41.7706 38.4645 40.2289C39.1031 38.6871 39.2702 36.9906 38.9447 35.3539C38.6191 33.7172 37.8155 32.2138 36.6355 31.0338C35.4555 29.8538 33.9521 29.0502 32.3154 28.7246C30.6786 28.3991 28.9821 28.5662 27.4404 29.2048C25.8986 29.8434 24.5809 30.9248 23.6538 32.3124C22.7266 33.6999 22.2318 35.3312 22.2318 37C22.2318 39.2378 23.1207 41.3839 24.7031 42.9662C26.2854 44.5486 28.4315 45.4375 30.6693 45.4375ZM30.6693 30.4375C31.9672 30.4375 33.236 30.8224 34.3152 31.5435C35.3944 32.2646 36.2355 33.2895 36.7322 34.4886C37.2289 35.6878 37.3589 37.0073 37.1057 38.2803C36.8525 39.5533 36.2275 40.7226 35.3097 41.6404C34.3919 42.5582 33.2226 43.1832 31.9496 43.4364C30.6766 43.6896 29.3571 43.5597 28.1579 43.063C26.9588 42.5663 25.9339 41.7251 25.2128 40.6459C24.4917 39.5667 24.1068 38.2979 24.1068 37C24.1068 35.2595 24.7982 33.5903 26.0289 32.3596C27.2596 31.1289 28.9288 30.4375 30.6693 30.4375ZM56.9193 21.0625H4.41928C4.17064 21.0625 3.93218 21.1613 3.75637 21.3371C3.58055 21.5129 3.48178 21.7514 3.48178 22V52C3.48178 52.2486 3.58055 52.4871 3.75637 52.6629C3.93218 52.8387 4.17064 52.9375 4.41928 52.9375H56.9193C57.1679 52.9375 57.4064 52.8387 57.5822 52.6629C57.758 52.4871 57.8568 52.2486 57.8568 52V22C57.8568 21.7514 57.758 21.5129 57.5822 21.3371C57.4064 21.1613 57.1679 21.0625 56.9193 21.0625ZM5.35678 32.1391C7.59432 31.6124 9.64071 30.4723 11.2661 28.8469C12.8916 27.2214 14.0316 25.175 14.5583 22.9375H46.7802C47.3069 25.175 48.447 27.2214 50.0724 28.8469C51.6978 30.4723 53.7442 31.6124 55.9818 32.1391V41.8609C53.7442 42.3876 51.6978 43.5277 50.0724 45.1531C48.447 46.7786 47.3069 48.825 46.7802 51.0625H14.5583C14.0316 48.825 12.8916 46.7786 11.2661 45.1531C9.64071 43.5277 7.59432 42.3876 5.35678 41.8609V32.1391ZM55.9818 30.2031C54.2497 29.7161 52.6718 28.7921 51.3995 27.5198C50.1272 26.2475 49.2032 24.6696 48.7162 22.9375H55.9818V30.2031ZM12.6224 22.9375C12.1353 24.6696 11.2113 26.2475 9.93906 27.5198C8.66677 28.7921 7.08889 29.7161 5.35678 30.2031V22.9375H12.6224ZM5.35678 43.7969C7.08889 44.2839 8.66677 45.2079 9.93906 46.4802C11.2113 47.7525 12.1353 49.3304 12.6224 51.0625H5.35678V43.7969ZM48.7162 51.0625C49.2032 49.3304 50.1272 47.7525 51.3995 46.4802C52.6718 45.2079 54.2497 44.2839 55.9818 43.7969V51.0625H48.7162Z" fill="black" />
              <defs>
                <linearGradient id="paint0_linear_4349_6456" x1="52.4419" y1="6.8418" x2="52.4419" y2="39.9997" gradientUnits="userSpaceOnUse">
                  <stop />
                  <stop offset="1" stop-color="#6C6C6C" />
                </linearGradient>
              </defs>
            </svg>
            <S.WrapperTitle>For financial tech companies</S.WrapperTitle>
            <S.WrapperText>A financial foundation you can build on.</S.WrapperText>
            <S.InfoList>
              <S.InfoItem>
                Automate money flows end-to-end.
              </S.InfoItem>
              <S.InfoItem>
                Automated accounting.
              </S.InfoItem>
              <S.InfoItem>
                Financial ETL.
              </S.InfoItem>
            </S.InfoList>
          </S.WrapperItem>
          <S.WrapperItem>
            <svg width="61" height="63" viewBox="0 0 61 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="22.9343" y="1.5858" width="31.319" height="38.0183" rx="2.24446" stroke="url(#paint0_linear_4349_6468)" stroke-width="1.82687" stroke-dasharray="5.53 5.53" />
              <rect width="29.3156" height="37.9378" transform="translate(7.52353 15.9311)" fill="#E8E8E8" fill-opacity="0.7" />
              <path d="M4.54169 54.3H40.1084M6.15836 15.5H38.4917M7.77502 15.5V54.3M36.8751 15.5V54.3M15.8584 23.5833H19.0917M15.8584 30.05H19.0917M15.8584 36.5167H19.0917M25.5584 23.5833H28.7917M25.5584 30.05H28.7917M25.5584 36.5167H28.7917M15.8584 54.3V47.025C15.8584 45.6864 16.9448 44.6 18.2834 44.6H26.3667C27.7053 44.6 28.7917 45.6864 28.7917 47.025V54.3" stroke="black" stroke-width="1.72445" stroke-linecap="round" stroke-linejoin="round" />
              <defs>
                <linearGradient id="paint0_linear_4349_6468" x1="38.5938" y1="0.672363" x2="38.5938" y2="40.5176" gradientUnits="userSpaceOnUse">
                  <stop />
                  <stop offset="1" stop-color="#6C6C6C" />
                </linearGradient>
              </defs>
            </svg>
            <S.WrapperTitle>For Growth/Enterprise</S.WrapperTitle>
            <S.WrapperText>A financial foundation you can build on.</S.WrapperText>
            <S.InfoList>
              <S.InfoItem>
                Multi-entity accounting.
              </S.InfoItem>
              <S.InfoItem>
                Complex payments operations.
              </S.InfoItem>
              <S.InfoItem>
                Balance sheets/reports.
              </S.InfoItem>
            </S.InfoList>
          </S.WrapperItem>
        </S.WrapperList>
      </S.Wrapper>
    </S.Container>
  );
}

export default InfoBlock
