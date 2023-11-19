import styled from "styled-components";

const RobotCardStyled = styled.article`
  padding: 8px;
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 14px;
  background-color: ${({ theme }) => theme.colors.secondBackColor};
  border-radius: 25px;
  box-shadow: 0 1px 8px ${({ theme }) => theme.colors.accentColor};
  min-height: 220px;
  height: auto;
  width: 100%;
  margin-top: 20px;
  align-items: center;

  .card {
    &__image {
      max-width: 32cqw;
      height: auto;
      border-radius: 15%;
      box-shadow: 0 1px 8px #cff0f2;
      aspect-ratio: 1/1;
      border: 2px solid ${({ theme }) => theme.colors.accentColor};
      object-fit: cover;
      box-shadow: 0 1px 8px ${({ theme }) => theme.colors.secondBackColor};
    }

    &__box {
      display: flex;
      flex-direction: column;
      gap: inherit;
    }

    &__name {
      font-size: 8cqw;
      color: ${({ theme }) => theme.colors.fontColor};
      text-shadow: 0.1px 0.1px 3px ${({ theme }) => theme.colors.accentColor};
    }

    &__resistance {
      font-size: 4cqw;
      color: ${({ theme }) => theme.colors.fontColor};
      text-shadow: 0.1px 0.1px 3px ${({ theme }) => theme.colors.accentColor};
    }

    &__speed {
      font-size: 4cqw;
      color: ${({ theme }) => theme.colors.fontColor};
      text-shadow: 0.1px 0.1px 3px ${({ theme }) => theme.colors.accentColor};
    }
  }
`;

export default RobotCardStyled;
