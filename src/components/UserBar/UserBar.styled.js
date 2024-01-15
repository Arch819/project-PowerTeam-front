import styled from '@emotion/styled';

export const IconSettings = styled.svg`
  width: ${props => props.size || '24px'};
  height: ${props => props.size || '24px'};
  fill: ${props => props.color || 'none'};
  display: block;

  @media screen and (min-width: 768px) {
    width: ${props => props.size || '28px'};
    height: ${props => props.size || '28px'};
  }
`;

export const IconUser = styled.svg`
  width: ${props => props.size || '21px'};
  height: ${props => props.size || '21px'};
  fill: ${props => props.color || 'rgba(239, 237, 232, 0.1)'};
  stroke: ${props => props.color || 'none'};
  display: block;
  position: absolute;
  transform: translate(50%, 50%);
  bottom: 50%;
  right: 50%;

  @media screen and (min-width: 768px) {
    width: ${props => props.size || '24px'};
    height: ${props => props.size || '24px'};
  }
`;

export const IconUserWrapper = styled.div`
  border: 1px solid #e6533c;
  border-radius: 50%;
  width: 37px;
  height: 37px;
  position: relative;
  
  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;
