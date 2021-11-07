import styled from "styled-components";

export const FooterTopStyled = styled.div`
  position: relative;
  width: 60%;
  height: 200px;
  padding: 40px 0;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 15px;
  margin: 50px auto 0 auto;
  z-index: 10000;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    & {
        padding: 30px 0;
    }
  }
`;
