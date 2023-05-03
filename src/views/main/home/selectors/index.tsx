import { useState } from 'react'
import S from './styles'
import Button from '../button';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const Selectors = () => {

  const selectors = ['Accounting', 'Workflows', 'Secrets', 'Connections'];

  const pagination = {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<button class="' + className + '">' + (selectors[index]) + "</button>";
    },
  };


  return (
    <S.Container>
      <S.Selectors>
        <div className='swiper-pagination'></div>
        <S.Block>
          <S.Title>A single system to manage it all</S.Title>
          <S.Text>Our modules are feature-complete on their own and are natively integrated together.</S.Text>
        </S.Block>
      </S.Selectors>

      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <S.Content>
            <div>
              <S.ContentTitle>Financial and accounting platform.</S.ContentTitle>
              <S.List>
                <S.Item>All your accounts and transactions in one place.</S.Item>
                <S.Item>Get historical reports and bank statements across all accounts.</S.Item>
                <S.Item>Label, categorize and reconcile with external systems.</S.Item>
              </S.List>
              <S.ContentButton>
                <span>Learn more</span>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.44105 12.2365L6.29048 11.0987L10.2855 7.10369H0.25V5.44176H10.2855L6.29048 1.45312L7.44105 0.308948L13.4048 6.27273L7.44105 12.2365Z" fill="#A1A1AA" />
                </svg>
              </S.ContentButton>
            </div>
            <img className='content-image' src="/display@2x.png" alt="Financial and accounting platform." width="525" />
          </S.Content>
        </SwiperSlide>
        <SwiperSlide>
          <S.Content>
            <div>
              <S.ContentTitle>Workflows</S.ContentTitle>
              <S.List>
                <S.Item>Connect anything.</S.Item>
                <S.Item>Initiate payments.</S.Item>
                <S.Item>Build financial data integrations.</S.Item>
              </S.List>
              <S.ContentButton>
                <span>Learn more</span>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.44105 12.2365L6.29048 11.0987L10.2855 7.10369H0.25V5.44176H10.2855L6.29048 1.45312L7.44105 0.308948L13.4048 6.27273L7.44105 12.2365Z" fill="#A1A1AA" />
                </svg>
              </S.ContentButton>
            </div>
            <img src="/display3@2x.png" alt="Financial and accounting platform." width="529" className='content-image' />
          </S.Content>
        </SwiperSlide>
        <SwiperSlide>
          <S.Content>
            <div>
              <S.ContentTitle>Universal Secrets Manager</S.ContentTitle>
              <S.List>
                <S.Item>Encrypt anything.</S.Item>
                <S.Item>Collect and show via SDK.</S.Item>
                <S.Item>Manage access per token.</S.Item>
              </S.List>
              <S.ContentButton>
                <span>Learn more</span>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.44105 12.2365L6.29048 11.0987L10.2855 7.10369H0.25V5.44176H10.2855L6.29048 1.45312L7.44105 0.308948L13.4048 6.27273L7.44105 12.2365Z" fill="#A1A1AA" />
                </svg>
              </S.ContentButton>
            </div>
            <img src="/display2@2x.png" alt="Financial and accounting platform." width="525" className='content-image' />
          </S.Content>
        </SwiperSlide>
        <SwiperSlide>
          <S.Content>
            <div>
              <S.ContentTitle>Connections</S.ContentTitle>
              <S.List>
                <S.Item>Sync with any API or database.</S.Item>
                <S.Item>Run financial ETL.</S.Item>
                <S.Item>Build custom connectors.</S.Item>
              </S.List>
              <S.ContentButton>
                <span>Learn more</span>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.44105 12.2365L6.29048 11.0987L10.2855 7.10369H0.25V5.44176H10.2855L6.29048 1.45312L7.44105 0.308948L13.4048 6.27273L7.44105 12.2365Z" fill="#A1A1AA" />
                </svg>
              </S.ContentButton>
            </div>
            <img className='content-image' src="/display4@2x.png" alt="Financial and accounting platform." width="598" />
          </S.Content>
        </SwiperSlide>
      </Swiper>
    </S.Container>
  );
}

export default Selectors
