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
  min-width: 380px;
  min-height: 180px;
  border: 1.5px solid rgba(182, 182, 182, .5);
  border-radius: 15px;
  cursor: pointer;
  transition: .35s;

  &:hover {
    transform: scale(1.04);
  }
`

const Icon = styled.div<{status: "good" | "bad"}>`
  background-image: url(${props => props.status === "good" ? good : bad});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 22%;
  aspect-ratio: 1;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  width: 47%;
  margin: 0 15px 0 0px;
`

const Title = styled.span`
  font-weight: bold;
  font-size: 30px;
`

const Des = styled.p`
  margin: 0;
`

const RightIcon = styled.img`

`

export { Card, Icon, Description, Title, Des, RightIcon }