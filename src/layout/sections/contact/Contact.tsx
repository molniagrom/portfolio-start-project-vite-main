import {
    ContactUs,
    Field,
    FormContent,
    GroupFields,
    InfoLogoContent,
    StyledForm,
    ContactTitle, ContactBlock, Colored
} from "./Contact.Styled.tsx";
import {Part} from "./part/Part.tsx";
import {FlexWrapper} from "../../../components/wrappers/FlexWrapper.tsx";
import {Button} from "../../../components/Button/Button.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Container} from "../../../components/Container.ts";
import {HoverableIcon} from "../../../components/icon/HoverableIcon.tsx";

export const Contact = () => {

    return (
        <ContactUs>
            <Container>
                <ContactTitle>
                    <h2>Contact Us</h2>
                    <Icon width={"18px"} height={"18px"} viewBox={"0 0 18 18"} iconId={"ElipseSmallGradient"}/>
                </ContactTitle>
                <ContactBlock>
                    <FlexWrapper gap={"clamp(50px, 10vw, 130px)"}>
                        <FormContent>
                            <h2>Get in touch</h2>
                            <StyledForm>
                                <GroupFields>
                                    <Field placeholder={"E-mail"} type={"email"}/>
                                    <Field placeholder={'Phone'} type={"phone"}/>
                                </GroupFields>
                                <Field placeholder={'Message'} as={"textarea"}/>
                                <Button
                                    type={"submit"}
                                    backgroundColor={"#2350D6"}
                                    color={"#fff"}
                                    fontSize={"15px"}
                                    fontWeight={"500"}
                                    padding={"10px 40px 10px 40px"}
                                    gap={"14px"}
                                    borderRadius={"9px"}
                                    fontFamily={"Roboto"}
                                    lineHeight={"136%"}
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
                </ContactBlock>
                <FlexWrapper justify="center" alignItems="center">
                    <Colored>
                        <HoverableIcon iconId="instagramColor" width={"33px"} height={"32px"}/>
                        <HoverableIcon iconId="whatsappColor" width={"33px"} height={"32px"}/>
                        <HoverableIcon iconId="telegramColor" width={"33px"} height={"32px"}/>
                    </Colored>
                </FlexWrapper>
            </Container>
        </ContactUs>
    );
};
