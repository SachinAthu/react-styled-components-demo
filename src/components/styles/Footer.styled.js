import styled from "styled-components";

export const FooterStyled = styled.footer`
  position: relative;
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 150px 0 60px;
  z-index: 1000;
  margin-top: -100px;

  ul {
    list-style-type: none;
  }

  ul > li {
    margin-bottom: 20px;
    font-size: 15px;
  }

  p {
    text-align: right;
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;

    ul {
        padding: 0;
    }

    p {
        text-align: center;
    }
  }
`;
