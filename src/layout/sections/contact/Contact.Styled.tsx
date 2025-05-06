import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const ContactUs = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 25px 197px 25px;   
    min-height: 100vh;
`;

export const ContactTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primaryFont};
    font-weight: 600;
    font-size: 32px;
    line-height: 136%;
    padding-bottom: 65px;

    h2 {
        font-weight: 600;
        font-size: 32px;
        line-height: 136%;
        padding-bottom: 6px;
    }
`;

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: ${theme.colors.primaryFont};
    //padding: 32px;
    flex: 1;

    h2 {
        font-weight: 500;
        font-size: 36px;
        line-height: 136%;
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 23px;
`;

export const GroupFields = styled.div`
    display: flex;
    flex-direction: row;
    gap: 7px;
`;

type FieldPropsType = {
    placeholder?: string;
    type?: string;
    as?: string;
};

export const Field = styled.input<FieldPropsType>`
    background-color: #393838;
    border: none;
    padding: 9px 30px;
    border-radius: 9px;
    width: 100%;
    //min-height: 36px;

    font-weight: 400;
    font-size: 13px;
    line-height: 136%;
    color: #a5a5a5;

    ::placeholder {
        color: #aaa;
    }

    ${props =>
            props.as === "textarea" &&
            css`
                min-width: 430px;
                min-height: 152px;
                resize: none;
            `}
`;

export const InfoLogoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    //padding: 32px;
    gap: 35px;
`;

export const Colored = styled.div`
    display: flex;
    flex-direction: row;
    gap: 22px;
    //margin-top: 40px;
    padding-top: 65px;


    svg {
        transition: transform 0.2s ease;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

export const ContactBlock = styled.div`
    background-color: #2C2B2B;
    padding: 53px 113px 65px 82px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    max-width: 900px;
    width: 100%;
    box-shadow: 0 0 16px 8px rgba(19, 19, 19, 0.18);
    margin: 0 auto;
`;
