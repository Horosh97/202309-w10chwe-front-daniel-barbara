import styled from "styled-components";

const RobotFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .robot-form {
    &__block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    &__label {
      color: ${({ theme }) => theme.colors.fontColor};
      font-size: 1.4rem;
      margin-bottom: 12px;
    }

    &__input {
      width: 100%;
      padding-top: 16px;
      padding-bottom: 16px;
      color: ${({ theme }) => theme.colors.fontColor};
      font-size: 1rem;
      background-color: ${({ theme }) => theme.colors.fontSecondColor};
      border-radius: ${({ theme }) => theme.borderRadius};
      box-shadow: 0 1px 3px ${({ theme }) => theme.colors.fontColor};
    }

    &__button {
      padding: 16px;
      background-color: ${({ theme }) => theme.colors.fontSecondColor};
      border-radius: ${({ theme }) => theme.borderRadius};
      box-shadow: 0 1px 3px ${({ theme }) => theme.colors.fontColor};
    }
  }
`;
export default RobotFormStyled;
