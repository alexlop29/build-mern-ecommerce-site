import ResponsiveAppBar from '../../modules/navigation-bar/organisms/navigation-bar';
import styled from '@emotion/styled';
import { Details } from '../../modules/products/templates/details';

const Wrapper = styled.section`
  background: #fcfbe7;
`;

export const Product = () => {
  return (
    <Wrapper>
      <ResponsiveAppBar />
      <Details/>
    </Wrapper>
  );
};

