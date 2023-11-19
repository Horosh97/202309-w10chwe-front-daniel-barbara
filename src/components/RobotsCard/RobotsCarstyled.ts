import styled from "styled-components";

const RobotsCardStyled = styled.article`
  padding-right: 5px;
  padding-left: 5px;
  display: flex;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: 25px;
  box-shadow: 0 1px 8px ${({ theme }) => theme.colors.accentColor};
  min-height: 220px;
  .card {
    &__image {
      aspect-ratio: 1/1;
      max-width: 32cqw;
      height: auto;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.accentColor};
      object-fit: cover;
      box-shadow: 0 1px 8px ${({ theme }) => theme.colors.secondBackColor};
    }

    &__name {
      font-size: 5cqw;
      color: ${({ theme }) => theme.colors.fontColor};
      text-shadow: 0.1px 0.1px 3px ${({ theme }) => theme.colors.accentColor};
    }

    &__resistance {
      font-size: 5cqw;
      color: ${({ theme }) => theme.colors.fontColor};
      text-shadow: 0.1px 0.1px 3px ${({ theme }) => theme.colors.accentColor};
    }

    &__speed {
      font-size: 5cqw;
      color: ${({ theme }) => theme.colors.fontColor};
      text-shadow: 0.1px 0.1px 3px ${({ theme }) => theme.colors.accentColor};
    }
  }
`;

export default RobotsCardStyled;
