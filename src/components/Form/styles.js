import styled from "styled-components";

export const SContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
`;

export const SForm = styled.form`
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
        justify-content: space-between;

        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

        .horas {
            display: flex;
            justify-content: space-around;
        }

        input, select{
            margin-bottom: 20px;
            text-align: center;
            font-family: inherit;
            width: 50%;
            border-radius: 20px;
            background: transparent;
            border: 1px solid #ccc;
        }

        select {
            appearance: none;
            color: #1D1D1D;
            font-family: inherit;
            font-size: 15px;
            border: 1px solid #ECF0F1;
            padding: 10px 20px;
            text-align: center;
            width: 80%;
            :focus{
                color: #495957;
                background-color: #FFFFFF;
                border-color: #80BDFF;
                outline: 0;
                box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25);
            }
        }

        .fechas{
            appearance: none;
            color: #1D1D1D;
            font-family: inherit;
            font-size: 15px;
            border: 1px solid #ECF0F1;
            padding: 20px 10px;
            display: inline-block;
            :focus{
                color: #495957;
                background-color: #FFFFFF;
                border-color: #80BDFF;
                outline: 0;
                box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25);
            }
        }

    }
    .comments {
        background-color: white;
        border-radius: 10px;

        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 3;

        display: flex;
        flex-direction: column;
        align-items: center;

        textarea{
            width: 90%;
            height: 150px;
            max-height: 100%;
            margin-bottom: 20px;
            padding: 10px;
            outline: none;
            resize: none;
            font-family: inherit;
            font-size: 16px;
            overflow: hidden;
            border: 1px solid #ccc;
            border-radius: 10px;
            :focus{
                //color: #495957;
                //background-color: #FFFFFF;
                border-color: #80BDFF;
                outline: 0;
                box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25);
            }
        }
    }
    .btn {
        grid-column-start: 4;
        justify-self: end;
        align-self: end;

        height: 30px;
        width: 40%;
        margin: 0px 10px;
        
        border-radius: 10px;
        border: none;
        cursor: pointer;

        background-color: green;
        color: #fff;

        font-family: inherit;
        font-weight: bold;

    }

`;
