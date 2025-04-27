// import React from 'react';
import {Icon} from "../../../../components/icon/Icon.tsx";
import {
    ContactUs,
    Field,
    FormContent,
    GroupFields,
    InfoLogoContent,
    StyledForm,
    TopContent
} from "./contact.styled.tsx";
import {Button} from "../../../../components/Button/Button.tsx";
import {FlexWrapper} from "../../../../components/wrappers/FlexWrapper.tsx";
import {Part} from "./part/Part.tsx";

export const Contact = () => {
    return (
        <ContactUs>
            <TopContent>
                <h2>Contact Us</h2>
                <Icon iconId={"ElipseSmallGradient"}/>
            </TopContent>
            <FlexWrapper>
                <FormContent>
                    <h2>Get in touch</h2>
                    <StyledForm>
                        <GroupFields>
                            <Field placeholder={"E-mail"} type={"email"}/>
                            <Field placeholder={'Phone'} type={"phone"}/>
                        </GroupFields>
                        <Field placeholder={'Massage'} as={"textarea"}/>
                        <Button
                            type={"submit"}
                            backgroundColor={"#2350D6"}
                            color={"#fff"}
                            fontSize={"15px"}
                            fontWeight={"600"}
                            padding={"15px"}
                            gap={"14px"}
                            borderRadius={"20px"}
                            fontFamily={"Roboto"}
                        >Send</Button>
                    </StyledForm>
                </FormContent>
                <InfoLogoContent>
                    <Part
                        iconId={"locationBlue"}
                        title={"Location"}
                        subTittle={"Mashhad/Iran"}/>

                    <Part
                        iconId={"telephoneBlue"}
                        title={"Phone"}
                        subTittle={"+989150063913"}/>

                    <Part
                        iconId={"emailBlue"}
                        title={"Email"}
                        subTittle={"arkn3913@gmail.com"}/>
                </InfoLogoContent>
            </FlexWrapper>

        </ContactUs>
    );
};



















