import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const ContactUs = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 65px 25px 197px 25px;   

    @media screen and ${theme.media.tablet} {
        padding: 37px 80px 52px 80px;
    }
    @media screen and ${theme.media.mobile} {
        padding: 47px 30px 52px 30px;
    }
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


    @media screen and ${theme.media.mobile} {
        padding-bottom: 40px;
    }

    h2 {
        font-weight: 600;
        font-size: 32px;
        line-height: 136%;
        padding-bottom: 6px;


        @media screen and ${theme.media.mobile} {
            font-size: 19px;
        }
    }
`;

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: ${theme.colors.primaryFont};
    flex: 1;

    h2 {
        font-weight: 500;
        font-size: 36px;
        line-height: 136%;


        @media screen and ${theme.media.mobile} {
            font-size: 22px;
        }
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 23px;

    @media screen and ${theme.media.mobile} {
        padding-top: 14px;
    }
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
    max-width: 211px;
    
    font-weight: 400;
    font-size: 13px;
    line-height: 136%;
    color: #a5a5a5;

    ::placeholder {
        color: #aaa;
    }


    @media screen and ${theme.media.mobile} {
        font-size: 7px;
    }
    
    ${props =>
            props.as === "textarea" &&
            css`
                @media screen and (min-width: 900px) {
                    min-width: 430px;
                }
                max-width: 430px;
                min-height: 152px;
                resize: none;
            `}
`;

export const InfoLogoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    gap: 35px;

    @media screen and ${theme.media.tablet} {
        margin: 0 auto;
        gap: 60px;
    }
    @media screen and ${theme.media.mobile} {
        gap: 40px;
    }
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

    @media screen and ${theme.media.tablet} {
        padding: 53px 113px 65px 82px;
    }
    @media screen and ${theme.media.mobile} {
        padding: 32px 50px 56px 50px;
    }
`;
