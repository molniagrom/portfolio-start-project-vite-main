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
import {FormEvent, useRef, useState} from "react";
import {contactDetails, socialLinks} from "../../../data/portfolioData.ts";
import {theme} from "../../../styles/Theme.ts";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

export const Contact = () => {
    const {t} = useTranslation();
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current || isSubmitting) return;

        setIsSubmitting(true);
        setIsSuccess(false);
        setIsError(false);

        try {
            await emailjs.sendForm('service_k3y1l3q', 'template_pp8p1s5', form.current, {
                publicKey: '0Eb6bUtkWnoBKFJZ4',
            });

            form.current.reset();
            setIsSuccess(true);
        } catch {
            setIsError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <ContactUs id="contact">
            <Container padding={"0"}>
                <ContactTitle>
                    <h2>{t("contact.title")}</h2>
                    <Icon width={"18px"} height={"18px"} viewBox={"0 0 18 18"} iconId={"ElipseSmallGradient"}/>
                </ContactTitle>
                <ContactBlock>
                    <FlexWrapper $adaptiveContact gap={"clamp(50px, 10vw, 130px)"}>
                        <FormContent>
                            <h2>{t("contact.getInTouch")}</h2>
                            <StyledForm ref={form} onSubmit={sendEmail}>
                                <GroupFields>
                                    <Field required minLength={5} name={"email"} placeholder={t("contact.email")} type={"email"}/>
                                    <Field required minLength={7} name={"number"} placeholder={t("contact.phone")} type={"tel"}/>
                                    <Field required minLength={2} name={"name"} placeholder={t("contact.name")} type={"text"}/>
                                </GroupFields>
                                <Field required minLength={10} name={"message"} placeholder={t("contact.message")} as={"textarea"}/>
                                <Button
                                    $adaptiveContact
                                    type={"submit"}
                                    disabled={isSubmitting}
                                    $backgroundColor={theme.colors.accent}
                                    color={theme.colors.primaryFont}
                                    fontSize={"15px"}
                                    fontWeight={"500"}
                                    padding={"10px 40px 10px 40px"}
                                    gap={"14px"}
                                    $borderRadius={"9px"}
                                    fontFamily={"Roboto"}
                                    lineHeight={"136%"}
                                >
                                    {isSubmitting ? t("contact.sending") : t("contact.send")}
                                </Button>
                                {(isSuccess || isError) && (
                                    <StatusMessage role="status" $isError={isError}>
                                        {isSuccess
                                            ? t("contact.success")
                                            : t("contact.error")}
                                    </StatusMessage>
                                )}
                            </StyledForm>
                        </FormContent>
                        <InfoLogoContent>
                            <Part
                                iconId={"locationBlue"}
                                title={t("contact.locationTitle")}
                                subTittle={contactDetails.location}/>

                            <Part
                                iconId={"telephoneBlue"}
                                title={t("contact.phoneTitle")}
                                subTittle={contactDetails.phone}/>

                            <Part
                                iconId={"emailBlue"}
                                title={t("contact.emailTitle")}
                                subTittle={contactDetails.email}/>
                        </InfoLogoContent>
                    </FlexWrapper>
                </ContactBlock>
                <FlexWrapper justify="center" $alignItems="center">
                    <Colored>
                        {socialLinks.map((link) => (
                            <HoverableIcon
                                key={link.label}
                                href={link.href}
                                label={link.label}
                                iconId={link.iconId}
                                width={"33px"}
                                height={"32px"}
                            />
                        ))}
                    </Colored>
                </FlexWrapper>
            </Container>
        </ContactUs>
    );
};

type StatusMessageProps = {
    $isError: boolean;
}

const StatusMessage = styled.p<StatusMessageProps>`
    color: ${props => props.$isError ? "#ff8c8c" : "#8fd8a8"};
`;
