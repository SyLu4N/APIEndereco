import styled from 'styled-components';

export const Container = styled.form`
  p {
    margin-bottom: 0.2rem;
    margin-left: 1.4rem;

    font-weight: 600;
    color: var(--colorstandard);
  }

  .success:focus {
    box-shadow: 0px 0px 4px var(--colorstandard);
  }

  .errorInput {
    box-shadow: 0px 0px 4px var(--colorError);
  }

  .errorInput input:focus {
    box-shadow: 0px 0px 4px var(--colorstandard);
  }
`;
