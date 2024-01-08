import styled from "styled-components";
import good from "../../../assets/icons/good.svg";
import bad from "../../../assets/icons/bad.svg";

const Card = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 80%;
  min-height: 180px;
  border: 1.5px solid rgba(182, 182, 182, .5);
  border-radius: 15px;
  cursor: pointer;
  transition: .35s;

  &:hover {
    transform: scale(1.04);
  };

  @media screen and (max-width: 800px) {
    width: 100%;
    min-width: 280px;
    gap: 8%;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    gap: 5%;
    min-height: 130px;
  };
`

const Icon = styled.div<{status: "good" | "bad"}>`
  background-image: url(${props => props.status === "good" ? good : bad});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 22%;
  min-width: 85px;
  aspect-ratio: 1;

  @media screen and (max-width: 800px) {
    width: 18%;
    min-width: 80px;
  };
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  width: 47%;
  margin: 0 15px 0 0px;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    margin: 0;
  };
  @media screen and (max-width: 400px) {
    gap: .4rem;
  };
`

const Title = styled.span`
  font-weight: bold;
  font-size: 30px;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    font-size: 24px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 21px;
  };
`

const Des = styled.p`
  margin: 0;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    font-size: 14px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 13px;
  };
`

const RightIcon = styled.img``

export { Card, Icon, Description, Title, Des, RightIcon }