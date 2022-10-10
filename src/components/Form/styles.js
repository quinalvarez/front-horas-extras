import styled from "styled-components";

export const SContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 20px 0;
`;

export const SForm = styled.form`
    background-color: red;
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    //grid-template-rows: 1fr auto;
    gap: 30px;

    .card {
        padding: 10px 0;
        width: 250px;
        height: 100px;
        background-color: white;
        border-radius: 10px;

        justify-self: center;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        .horas {
            display: flex;
            justify-content: space-around;
        }
    }

    .s__select{
        width: 80%;
        height: 30px;
    }
`;
