import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {ProjectItem} from "../../../../data/portfolioData";
import {theme} from "../../../../styles/Theme";

export const Card = ({project}: {project: ProjectItem}) => {
    const {t} = useTranslation();
    const categoryKeys = {Commercial: "commercial", Teamwork: "teamwork", "Pet Project": "petProject"};

    return (
        <StyledCard>
            <Preview src={project.image} alt={project.imageAlt} loading="lazy" width="640" height="400"/>
            <Content>
                <Category>{project.type.map((type) => t(`filters.${categoryKeys[type]}`)).join(" · ")}</Category>
                <h3>{t(project.titleKey)}</h3>
                {project.contributionKey && <p>{t("projects.role")}: {t(project.roleKey ?? "main.title")}</p>}
                <p>{t(project.summaryKey)}</p>
                {project.contributionKey && <p><strong>{t("projects.contribution")}:</strong> {t(project.contributionKey)}</p>}
                {project.resultKey && <p><strong>{t("projects.result")}:</strong> {t(project.resultKey)}</p>}
                {project.stack.length > 0 && (
                    <Stack aria-label={t("projects.stack")}>
                        {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
                    </Stack>
                )}
                {project.storybookUrl && <Evidence href={project.storybookUrl} target="_blank" rel="noreferrer">{t("projects.storybookExample")} ↗</Evidence>}
                <Actions>
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`${t("projects.view")}: ${t(project.titleKey)}`}>{t("projects.view")} ↗</a>
                    <a href={project.codeUrl} target="_blank" rel="noreferrer" aria-label={`${t("projects.viewCode")}: ${t(project.titleKey)}`}>{t("projects.viewCode")}</a>
                </Actions>
            </Content>
        </StyledCard>
    );
};

const StyledCard = styled.article`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    border: 1px solid ${theme.colors.border};
    border-radius: 24px;
    background: ${theme.colors.secondaryBg};
    color: ${theme.colors.primaryFont};
`;

const Preview = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    object-position: top;
    background: #fff;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 16px;
    padding: 24px;

    h3 { font-size: 22px; line-height: 1.3; }
    p { font-size: 15px; line-height: 1.6; }
`;

const Category = styled.p`
    color: ${theme.colors.secondaryFont};
    font-weight: 600;
`;

const Stack = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    li {
        padding: 5px 10px;
        border: 1px solid ${theme.colors.border};
        border-radius: 8px;
        font-size: 12px;
    }
`;

const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    margin-top: auto;
    padding-top: 8px;

    a { color: ${theme.colors.primaryFont}; font-weight: 600; }
    a:first-child { color: ${theme.colors.white}; background: ${theme.colors.accent}; padding: 10px 16px; border-radius: 10px; }
    a:last-child { text-decoration: underline; text-underline-offset: 4px; }
`;

const Evidence = styled.a`
    color: ${theme.colors.primaryFont};
    font-size: 14px;
    text-decoration: underline;
    text-underline-offset: 4px;
`;
