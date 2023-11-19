import styled from "styled-components";

const HomePageStyled = styled.div`
  margin: 20px 16px;
  .main-heading {
    margin: 16px;
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.fontColor};
  }
`;

export default HomePageStyled;
