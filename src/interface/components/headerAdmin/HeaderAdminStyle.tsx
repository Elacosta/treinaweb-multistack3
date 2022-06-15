import { styled } from "@mui/material";

export const HeaderContainer = styled('header')`
    height: 115px;
    background-color: #f6f6f6;
    padding: ${({theme}) => theme.spacing(2)};

    div {
        height:100%;
        max-width: 970px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        gap: ${({theme}) => theme.spacing(2)};
        align-items: center;
    }

    a {
        font-size: 14px;

    }
`;

export const Logo = styled('img')``;

export const SwitchPageContainer = styled('nav')`
    display: flex;
    gap: ${({theme}) => theme.spacing(2)};
    flex-wrap: wrap;
    justify-content: flex-end;
`;