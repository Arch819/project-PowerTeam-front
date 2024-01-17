import { SectionStyled } from './Section.styled';

function Section({ children, use }) {
  return <SectionStyled use={use}>{children}</SectionStyled>;
}

export default Section;
