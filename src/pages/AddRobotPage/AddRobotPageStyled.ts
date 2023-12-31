import styled from "styled-components";

const AddRobotPageStyled = styled.div`
  margin: 20px 16px;
  .main-heading {
    margin: 16px;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.fontColor};
  }
`;

export default AddRobotPageStyled;
