import styled from "styled-components";

export const FlexStyled = styled.div`
    display: flex;
    justify-content: space-between;

    & > div,
    & > ul {
        flex: 1;
    }

    & > div > h1 {
        margin-bottom: 30px;
    }

    & > div > p {
        margin-bottom: 30px;
    }

    @media(max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        text-align: center;
    }
`