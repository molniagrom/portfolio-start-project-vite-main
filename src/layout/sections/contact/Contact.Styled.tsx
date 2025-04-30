import styled, {css} from "styled-components";

export const ContactUs = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #222222;

`
export const ContactTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
`
export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #fff;
    min-height: 290px;
`

export const StyledForm = styled.form`
   
`

type FieldPropsType = {
    placeholder?: string
    type?: string
    as?: string
}

export const Field = styled.input<FieldPropsType>`
    ${props => props.as && css`
        width: 100%;
        //min-height: 429px;
        border: none;
        padding: 0;
    `}
`
export const GroupFields = styled.div`
    display: flex;
    flex-direction: row;
    gap: 7px;
`

export const InfoLogoContent = styled.div`
    color: #fff;
`


























