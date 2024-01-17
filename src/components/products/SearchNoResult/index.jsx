import {
  NoResultOrangeText,
  NoResultText,
  NoResultWrapper,
} from './index.styled';

const SearchNoResult = () => {
  return (
    <NoResultWrapper>
      <NoResultText>
        <NoResultOrangeText>Sorry, no results were found</NoResultOrangeText>{' '}
        for the product filters you selected. You may want to consider other
        search options to find the product you want. Our range is wide and you
        have the opportunity to find more options that suit your needs.
      </NoResultText>
      <NoResultOrangeText>
        Try changing the search parameters.
      </NoResultOrangeText>
    </NoResultWrapper>
  );
};
export default SearchNoResult;
