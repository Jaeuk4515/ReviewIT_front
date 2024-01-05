import styled from "styled-components";

const StarWrapper = styled.div`
  display: flex;
  gap: .3rem;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    gap: .2rem;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    gap: .1rem;
  }
`

export { StarWrapper }