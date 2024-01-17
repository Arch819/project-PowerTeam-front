import styled from 'styled-components';
import bgMobile from '../../images/background/mobile/background-1-mobile.jpg';
import bdTablet from '../../images/background/tablet/background-1-tablet&.jpg';

export const SectionStyled = styled('section')(props => ({
  height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: props.use ? `url(${bgMobile})` : 'none',

  '@media screen and (min-width: 768px)': {
    backgroundImage: props.use ? `url(${bdTablet})` : 'none',
  },
}));
