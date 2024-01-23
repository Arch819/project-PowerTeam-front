import styled from 'styled-components';
import bgMobile from 'images/background/mobile/background-1-mobile.jpg';
import bgMobileRetina from 'images/background/mobile/background-1-mobile@2x.jpg';
import bgTablet from 'images/background/tablet/background-1-tablet.jpg';
import bgTabletRetina from 'images/background/tablet/background-1-tablet@2x.jpg';
import bgDesktopSec from 'images/background/desctop/background-2-des.jpg';
import bdDesktopSecRetina from 'images/background/desctop/background-2-des@2x.jpg';
import bgDesktopFirst from 'images/background/desctop/background-1-des.jpg';
import bdDesktopFirstRetina from 'images/background/desctop/background-1-des@2x.jpg';

export const SectionStyled = styled('section')(props => ({
  height: '100vh',
  paddingBottom: '40px',

  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
  backgroundImage: props.use === 'first' ? `url(${bgMobile})` : 'none',

  '@media screen and (min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi),screen and (min-resolution: 2dppx)':
    {
      backgroundImage:
        props.use === 'first' ? `url(${bgMobileRetina})` : 'none',
    },
  '@media screen and (min-width: 768px)': {
    backgroundImage: props.use === 'first' ? `url(${bgTablet})` : 'none',
  },
  '@media screen and (min-width: 768px) and (min-device-pixel-ratio: 2), screen and (min-width: 768px) and (min-resolution: 192dpi),screen and (min-width: 768px) and (min-resolution: 2dppx)':
    {
      backgroundImage:
        props.use === 'first' ? `url(${bgTabletRetina})` : 'none',
    },
  '@media screen and (min-width: 1440px)': {
    backgroundImage:
      props.use === 'first'
        ? `url(${bgDesktopFirst})`
        : props.use === 'secondary'
        ? `url(${bgDesktopSec})`
        : 'none',
  },
  '@media screen and (min-width: 1440px) and (min-device-pixel-ratio: 2), screen and (min-width: 1440px) and (min-resolution: 192dpi),screen and (min-width: 1440px) and (min-resolution: 2dppx)':
    {
      backgroundImage:
        props.use === 'first'
          ? `url(${bdDesktopFirstRetina})`
          : props.use === 'secondary'
          ? `url(${bdDesktopSecRetina})`
          : 'none',
    },
  '@media screen and (max-width: 1439px)': {
    '&.exercises-bg': {
      backgroundImage: 'none',
    },
  },
}));
