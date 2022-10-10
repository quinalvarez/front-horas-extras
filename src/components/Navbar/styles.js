import styled from "styled-components";

export const NavContainer = styled.nav`
    h2{
        font-weight: 400;
        span{
            font-weight: bold;
        }
    }
    img{
        height: 20px;
        color: white;
        background-color: transparent;
    }
    padding: .9rem;
    background-color: #333;
    color: white;
    height: 40px;
    display: flex;
    align-item: center;
    justify-content: space-between;
    div {
        display: flex;
        align-items: center;
    }
    a{
        color: white;
        text-decoration: none;
        text-align: center;
    }
`;