import { SectionStyled } from './Section.styled';

function Section({ children, use, className }) {
  return (
    <SectionStyled className={className} use={use}>
      {children}
    </SectionStyled>
  );
}

export default Section;
