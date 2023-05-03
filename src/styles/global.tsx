import { up } from 'styled-breakpoints'
import { createGlobalStyle } from 'styled-components'
import prism_styles from './prism'
import { down } from 'styled-breakpoints'
export const GlobalStyleProvider = createGlobalStyle`



html {
  scroll-behavior: smooth;
  background-color: #FAFAFA;
  -webkit-font-smoothing: antialiased;
  
}
body {
    background-color: transparent;

  /* overflow-x: hidden; */
  *:focus-visible {
    outline-color: #6e79d6 !important;
  }
  font-family: 'Inter', sans-serif;


  // Styles for image viewer lightbox, has to be at body since it's an overlay
  .SRLCloseButton {
    background-color: transparent;
  }

  svg.SRLCloseButton {
    ${up('md')} {
      transform: scale(0.7)
    }
  }

  .SRLLightbox img {
    transition: all 0ms ease;
  }

  .SRLPrevButton {
    background-color: transparent;
  }
  .SRLNextButton {
    background-color: transparent;
  }

  p.SRLCaptionText {
    font-family: 'Inter', sans-serif;
  }


  // Styles for mantine select, has to be at body since it's a modal
  .mantine-Select-nothingFound {
    /* color: #f0f0f0 !important; */
    /* overflow: visible; */
  }

  .mantine-Select-dropdown {
    background: #fafafa !important;
  }

  .mantine-Select-hovered {
    background-color: #f0f0f0 !important;
  }

  .mantine-Select-item {
    /* height: 34px; */
    overflow: hidden;
    width: 100% !important;
    flex-shrink: 1; 
    padding: 6px 4px;
    border-radius: 4px;
  }

  .mantine-Select-selected {
    background-color: #eff6ff;
  }

  // Docsearch

  .DocSearch-Modal {
    font-family: 'Inter', sanf-serif;
  }

  .DocSearch-Logo {
    /* background-color: yellow */
    content: url('/gray-logo.svg');
    width: 18px;
    margin-right: 4px;
  }

  // swiper custom styles

  .swiper-pagination-bullet {
    border: 1px dashed #D7D7D7;
    border-right: none;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-shadow: 0px 4px 16px rgba(255, 255, 255, 0.45);
    padding-top: 57px;
    padding-bottom: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2px;
    position: relative;
    margin: 0;
    background: rgba(240, 240, 240, 0.6);
    color: #000000;
    opacity: 1;
    flex: 1 1;
    height: 100%;

    &:first-child::before {
      content: "";
      background-image: url("/db.svg");
      width: 24px;
      height: 24px;
      position: absolute;
      top: 24px;
      left: 50%;
      transform: translate(-50%, 0);
    }

    &:nth-child(2)::before {
      content: "";
      background-image: url("/workflow.svg");
      width: 24px;
      height: 24px;
      position: absolute;
      top: 24px;
      left: 50%;
      transform: translate(-50%, 0);
    }

    &:nth-child(3)::before {
      content: "";
      background-image: url("/finance.svg");
      width: 24px;
      height: 24px;
      position: absolute;
      top: 24px;
      left: 50%;
      transform: translate(-50%, 0);
    }

    &:last-child::before {
      content: "";
      background-image: url("/connection.svg");
      width: 24px;
      height: 24px;
      position: absolute;
      top: 24px;
      left: 50%;
      transform: translate(-50%, 0);
    }

    @media (max-width: 950px) {
      padding: 64px;
      padding-bottom: 28px;
    }

  }

  .swiper-pagination-bullet-active {
    color: #000000;
    position: relative;

    &::after {
      content: "";
      background: rgba(223, 223, 223, 0.6);
      width: 90%;
      height: 90%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
  }

  .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
    position: absolute;
    top: 0;
    left: 0;
    width: 46%;
    margin: 0;
    display: flex;
    justify-content: space-between;
    height: 100%;

    @media (max-width: 950px) {
      width: 115%;
      height: 94px;
      overflow: scroll;
      position: relative;
    }

  }

  .swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0;
  }

  ${prism_styles}

}
`
