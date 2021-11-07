import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  flex-direction: ${({ direction } ) => direction || "row"};
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;

  img {
    width: 80%;
  }

  & > div {
      flex: 1;
  }

  & > div > h2 {
      margin-bottom: 10px;
  }


  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

    & > div > p {
        margin-bottom: 40px;
    }
  }
`;
