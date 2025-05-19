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
import emailjs from '@emailjs/browser';
import {ElementRef, FormEvent, useRef} from "react";


export const Contact = () => {
    const form = useRef<ElementRef<"form">>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_k3y1l3q', 'template_pp8p1s5', form.current, {
                publicKey: '0Eb6bUtkWnoBKFJZ4',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        (e.target as HTMLFormElement).reset();
    };

    return (
        <ContactUs id="contact">
            <Container padding={"0"}>
                <ContactTitle>
                    <h2>Contact Us</h2>
                    <Icon width={"18px"} height={"18px"} viewBox={"0 0 18 18"} iconId={"ElipseSmallGradient"}/>
                </ContactTitle>
                <ContactBlock>
                    <FlexWrapper adaptiveContact gap={"clamp(50px, 10vw, 130px)"}>
                        <FormContent>
                            <h2>Get in touch</h2>
                            <>
                                <StyledForm ref={form} onSubmit={sendEmail}>
                                    <GroupFields>
                                        <Field required name={"email"} placeholder={"E-mail"} type={"email"}/>
                                        <Field required name={"number"} placeholder={'Phone'} type={"phone"}/>
                                        <Field required name={"name"} placeholder={'Name'} type={"name"}/>
                                    </GroupFields>
                                    <Field required name={"message"} placeholder={'Message'} as={"textarea"}/>
                                    <Button
                                        adaptiveContact
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
                            </>
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
