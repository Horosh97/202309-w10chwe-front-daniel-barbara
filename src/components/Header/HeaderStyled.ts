import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  height: 96px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accentColor};
  box-shadow: 0 1px 5px ${({ theme }) => theme.colors.fontColor};

  .active {
    color: ${({ theme }) => theme.colors.accentColor};
    text-shadow: 0.1px 0.1px 16px ${({ theme }) => theme.colors.fontColor};
    font-weight: bold;
  }
  .header {
    &__title {
      margin: 16px;
      font-family: ${({ theme }) => theme.typography.fontFamily};
      color: ${({ theme }) => theme.colors.fontColor};
      text-shadow: 0.1px 0.1px 1px ${({ theme }) => theme.colors.fontColor};
      text-transform: capitalize;
      font-weight: 600;
      font-size: 2rem;
      letter-spacing: 1px;
    }

    &__navigation {
      margin: 16px;
      display: flex;
      text-align: center;
      align-items: center;
      gap: 16px;
      font-size: 1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.fontColor};
      text-shadow: 0.1px 0.1px 1px ${({ theme }) => theme.colors.fontColor};
    }
  }
`;

export default HeaderStyled;
