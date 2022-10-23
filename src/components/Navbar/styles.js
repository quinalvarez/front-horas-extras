import styled from "styled-components";

export const NavContainer = styled.nav`
    padding: .9rem;
    background-color: #333;
    color: white;
    height: 40px;
    display: flex;
    align-item: center;
    justify-content: space-between;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

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