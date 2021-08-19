import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(280deg, #22c1c3, #842dfd);
  background-size: 200% 200%;
  -webkit-animation: animation 5s ease infinite;
  -moz-animation: animation 5s ease infinite;
  animation: animation 5s ease infinite;
  transition: 0.4s ease;

  @-webkit-keyframes animation {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 54%;
    }
    100% {
      background-position: 0% 47%;
    }
  }
  @-moz-keyframes animation {
    0% {
      background-position: 0% 47%;
    }
    50% {
      background-position: 100% 54%;
    }
    100% {
      background-position: 0% 47%;
    }
  }
  @keyframes animation {
    0% {
      background-position: 0% 47%;
    }
    50% {
      background-position: 100% 54%;
    }
    100% {
      background-position: 0% 47%;
    }
  }

  &:hover {
    background: linear-gradient(to left, rgba(34, 193, 195, 1), rgba(132, 45, 253, 1));
  }
`;

export const FooterText = styled.p`
  margin: 1rem;
  padding: 1rem;
  font-size: 30px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 26px;
  }
`;

export const OnHoverEmojiContainer = styled.span`
  display: ${(props) => (props.show ? 'inline' : 'none')};
  position: absolute;
  transition: 0.4s ease;
`;
