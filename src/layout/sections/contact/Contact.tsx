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
import {contactDetails, professionalLinks, socialLinks} from "../../../data/portfolioData.ts";
import {theme} from "../../../styles/Theme.ts";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

export const Contact = () => {
    const {t} = useTranslation();
    const isConfigured = Boolean(import.meta.env.VITE_EMAILJS_SERVICE_ID && import.meta.env.VITE_EMAILJS_TEMPLATE_ID && import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current || isSubmitting || !isConfigured) return;

        setIsSubmitting(true);
        setIsSuccess(false);
        setIsError(false);

        try {
            await emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
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
                        <InfoLogoContent>
                            <Part
                                iconId={"locationBlue"}
                                title={t("contact.locationTitle")}
                                subTittle={contactDetails.location}/>

                            <Part
                                iconId={"emailBlue"}
                                title={t("contact.emailTitle")}
                                subTittle={contactDetails.email}
                                href={`mailto:${contactDetails.email}`}/>
                            <DirectLinks>
                                {professionalLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}
                            </DirectLinks>
                        </InfoLogoContent>
                        <FormContent>
                            <h2>{t("contact.getInTouch")}</h2>
                            <p>{t(isConfigured ? "contact.required" : "contact.unavailable")}</p>
                            {isConfigured && <StyledForm ref={form} onSubmit={sendEmail} aria-busy={isSubmitting}>
                                <GroupFields>
                                    <FieldLabel htmlFor="contact-email">{t("contact.email")} *<Field id="contact-email" required name="email" autoComplete="email" type="email"/></FieldLabel>
                                    <FieldLabel htmlFor="contact-phone">{t("contact.phone")}<Field id="contact-phone" name="number" autoComplete="tel" type="tel"/></FieldLabel>
                                    <FieldLabel htmlFor="contact-name">{t("contact.name")} *<Field id="contact-name" required minLength={2} name="name" autoComplete="name" type="text"/></FieldLabel>
                                </GroupFields>
                                <FieldLabel htmlFor="contact-message">{t("contact.message")} *<Field id="contact-message" required minLength={10} name="message" as="textarea"/></FieldLabel>
                                <Button
                                    $adaptiveContact
                                    type={"submit"}
                                    disabled={isSubmitting}
                                    $backgroundColor={theme.colors.accent}
                                    color={theme.colors.white}
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
                            </StyledForm>}
                        </FormContent>

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

const FieldLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    min-width: 0;
    font-size: 14px;
`;

const DirectLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    a { color: ${theme.colors.primaryFont}; text-decoration: underline; text-underline-offset: 4px; }
`;
