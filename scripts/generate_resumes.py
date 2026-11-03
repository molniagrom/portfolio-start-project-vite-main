"""Generate searchable, one-page CVs. Requires reportlab and the Calibri fonts.

Run from the repository root with Python. Historical snapshot only; does not update public downloads.
Content follows the Russian CV approved on 2026-11-03.
"""
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable

ROOT = Path(__file__).resolve().parents[1]
FONT_DIR = Path("C:/Windows/Fonts")
pdfmetrics.registerFont(TTFont("Calibri", str(FONT_DIR / "calibri.ttf")))
pdfmetrics.registerFont(TTFont("CalibriBold", str(FONT_DIR / "calibrib.ttf")))
pdfmetrics.registerFontFamily("Calibri", normal="Calibri", bold="CalibriBold", italic="Calibri", boldItalic="CalibriBold")
NAVY = colors.HexColor("#1f3a5f")
TEXT = colors.HexColor("#242b33")
MUTED = colors.HexColor("#59616b")
LINE = colors.HexColor("#d3dbe4")

CONTENT = {
    "en": {
        "name": "Alina Groza",
        "role": "Frontend Developer | React / Next.js / TypeScript",
        "location": "Moldova",
        "format": "Full-time / part-time | Remote / hybrid / on-site",
        "about_heading": "PROFILE",
        "about": "Frontend developer with commercial experience building web applications with React, Next.js, and TypeScript. I develop responsive interfaces, reusable components, and REST API / WebSocket integrations.",
        "experience_heading": "WORK EXPERIENCE",
        "employer": "Akor Direct | Web studio, Poland",
        "period": "August 2026 - present",
        "description": "Development of platforms for events, music, media, and e-commerce.",
        "experience": [
            "Designed frontend architecture with React and TypeScript using Feature-Sliced Design (FSD). Implemented API typing based on the OpenAPI specification using openapi-typescript and openapi-fetch, as well as automatic token refresh. Separated business logic from the UI and reworked the API client.",
            "Developed responsive interfaces, forms with React Hook Form / Zod, infinite scrolling, and media processing using S3 presigned URLs / Canvas API; implemented a Next.js server-side proxy with request retries and cancellation. Used memoization to optimize rendering.",
            "Participated in code reviews, task breakdown, and API contract discussions with backend developers in an Agile / Scrum team. Used Codex and Claude for development and architecture planning.",
        ],
        "achievements_heading": "ACHIEVEMENTS",
        "achievements": [
            "Built a Radix UI component library and documented it in Storybook: <b>13+ reusable UI components</b> with usage documentation.",
            "Designed and implemented a Socket.IO chat from scratch, enabling <b>real-time messaging</b>, delivery and read statuses, and navigation to messages referenced in replies.",
            "Implemented code splitting and lazy loading with React.lazy / Suspense, <b>reducing the initial JavaScript bundle by approximately 6.2% (10 KB gzip, from 160.5 to 150.5 KB)</b> and decreasing the amount of JavaScript required for the initial load.",
        ],
        "reference": "<b>Reference:</b> from Dmitry, Director at Akor Direct, Poland.",
        "skills_heading": "KEY SKILLS",
        "skills": [
            "<b>Frontend:</b> React, Next.js, TypeScript, JavaScript (ES6+), React Router, HTML5, CSS3, Tailwind CSS, SCSS.",
            "<b>Data:</b> Redux Toolkit, RTK Query, TanStack Query, REST API, OpenAPI, Socket.IO.",
            "<b>UI and architecture:</b> Feature-Sliced Design (FSD), Radix UI, Shadcn UI, Storybook, React Hook Form, Zod.",
            "<b>Tools:</b> Git / GitHub, Vite, Vitest, Jest, CI/CD (Vercel), Codex, Claude.",
        ],
        "education_heading": "EDUCATION",
        "education": ["<b>IT-Incubator</b> - React, Next.js, TypeScript (2025)", "<b>Google AI Essentials</b> - Maximize Productivity With AI Tools"],
        "languages_heading": "LANGUAGES",
        "languages": ["Russian - native", "English - A2/B1"],
    },
    "ru": {
        "name": "Алина Гроза",
        "role": "Frontend-разработчик | React / Next.js / TypeScript",
        "location": "Молдова",
        "format": "Полная / частичная занятость | Удалённо / гибрид / офис",
        "about_heading": "О СЕБЕ",
        "about": "Frontend-разработчик с коммерческим опытом создания веб-приложений на React, Next.js и TypeScript. Разрабатываю адаптивные интерфейсы, переиспользуемые компоненты и интеграции REST API / WebSocket.",
        "experience_heading": "ОПЫТ РАБОТЫ",
        "employer": "Akor Direct | веб-студия, Польша",
        "period": "Август 2026 - настоящее время",
        "description": "Разработка платформ для мероприятий, музыки, медиа и e-commerce.",
        "experience": [
            "Проектировала архитектуру фронтенда на React и TypeScript с Feature-Sliced Design (FSD). Реализовала типизацию API по OpenAPI-спецификации через openapi-typescript и openapi-fetch, автоматическое обновление токенов. Вынесла бизнес-логику из UI и переработала API-клиент.",
            "Разрабатывала адаптивные интерфейсы, формы с React Hook Form / Zod, infinite scroll и обработку медиа через S3 presigned URL / Canvas API; серверный прокси на Next.js с повторными попытками и отменой запросов. Применяла мемоизацию для оптимизации рендеринга.",
            "Участвовала в code review, декомпозиции задач и согласовании API-контрактов с backend в Agile / Scrum-команде. Использовала Codex и Claude при разработке и проработке архитектуры.",
        ],
        "achievements_heading": "ДОСТИЖЕНИЯ",
        "achievements": [
            "Разработала библиотеку на Radix UI и описала её в Storybook - <b>13+ UI-компонентов доступны для повторного использования</b> с документацией по их применению.",
            "Спроектировала и реализовала чат на Socket.IO с нуля - <b>пользователи могут обмениваться сообщениями в реальном времени</b>, видеть статусы доставки и прочтения, переходить к сообщениям, на которые дан ответ.",
            "Внедрила code splitting и lazy loading через React.lazy / Suspense - <b>сократила initial JS-бандл примерно на 6,2% (10 КБ gzip: со 160,5 до 150,5 КБ)</b>, уменьшив объём JavaScript для первоначальной загрузки.",
        ],
        "reference": "<b>Рекомендация:</b> от директора Дмитрия (Akor Direct, Польша).",
        "skills_heading": "КЛЮЧЕВЫЕ НАВЫКИ",
        "skills": [
            "<b>Frontend:</b> React, Next.js, TypeScript, JavaScript (ES6+), React Router, HTML5, CSS3, Tailwind CSS, SCSS.",
            "<b>Данные:</b> Redux Toolkit, RTK Query, TanStack Query, REST API, OpenAPI, Socket.IO.",
            "<b>UI и архитектура:</b> Feature-Sliced Design (FSD), Radix UI, Shadcn UI, Storybook, React Hook Form, Zod.",
            "<b>Инструменты:</b> Git / GitHub, Vite, Vitest, Jest, CI/CD (Vercel), Codex, Claude.",
        ],
        "education_heading": "ОБРАЗОВАНИЕ",
        "education": ["<b>IT-Incubator</b> - React, Next.js, TypeScript (2025)", "<b>Google AI Essentials</b> - Maximize Productivity With AI Tools"],
        "languages_heading": "ЯЗЫКИ",
        "languages": ["Русский - родной", "Английский - A2/B1"],
    },
}


def generate(lang):
    data = CONTENT[lang]
    output = ROOT / "output/pdf/legacy_snapshot" / f"{lang}_cv_alina-groza.pdf"
    output.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(str(output), pagesize=A4, rightMargin=40, leftMargin=40, topMargin=34, bottomMargin=34,
                            title=f"{data['name']} - Frontend Developer", author="Alina Groza", subject="Curriculum vitae", lang=lang)
    body = ParagraphStyle("Body", fontName="Calibri", fontSize=10.4, leading=13.6, textColor=TEXT, spaceAfter=4)
    title = ParagraphStyle("Name", parent=body, fontName="CalibriBold", fontSize=25, leading=29, textColor=NAVY, spaceAfter=4)
    role = ParagraphStyle("Role", parent=body, fontSize=12, leading=15, textColor=NAVY, spaceAfter=6)
    small = ParagraphStyle("Small", parent=body, fontSize=9.6, leading=12, textColor=MUTED)
    heading = ParagraphStyle("Heading", parent=body, fontName="CalibriBold", fontSize=11.4, leading=14, textColor=NAVY, spaceBefore=10, spaceAfter=4, keepWithNext=True)
    job = ParagraphStyle("Job", parent=body, fontName="CalibriBold", fontSize=11, leading=14, textColor=NAVY)
    period = ParagraphStyle("Period", parent=small, alignment=TA_RIGHT)
    bullet = ParagraphStyle("Bullet", parent=body, leftIndent=13, firstLineIndent=0, bulletIndent=1, spaceAfter=6)
    contacts = [
        ('+373 778 36 740', 'tel:+37377836740'),
        ('mgrom250@gmail.com', 'mailto:mgrom250@gmail.com'),
        ('@MolniaG24', 'https://t.me/MolniaG24'),
        ('LinkedIn', 'https://www.linkedin.com/in/alina-groza-655422354/'),
        ('GitHub', 'https://github.com/molniagrom'),
    ]
    contact_text = ' &nbsp; | &nbsp; '.join(f'<link href="{url}" color="#1f3a5f">{label}</link>' for label, url in contacts)
    contact_text += f' &nbsp; | &nbsp; {data["location"]}'
    story = [Paragraph(data['name'], title), Paragraph(data['role'], role), Paragraph(contact_text, small), Paragraph(data['format'], small), Spacer(1, 5), HRFlowable(width='100%', thickness=1.2, color=NAVY)]

    def section(label):
        return [Paragraph(label, heading), HRFlowable(width='100%', thickness=.5, color=LINE, spaceAfter=5)]

    story += section(data['about_heading']) + [Paragraph(data['about'], body)]
    story += section(data['experience_heading'])
    row = Table([[Paragraph(data['employer'], job), Paragraph(data['period'], period)]], colWidths=[(doc.width-12)*.56, (doc.width-12)*.44], hAlign="LEFT")
    row.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),2)]))
    story += [row, Paragraph('<b>Frontend Developer</b>', body), Paragraph(data['description'], small), Spacer(1,4)]
    story += [Paragraph(text, bullet, bulletText='-') for text in data['experience']]
    story += section(data['achievements_heading'])
    story += [Paragraph(text, bullet, bulletText='-') for text in data['achievements']]
    story += [Paragraph(data['reference'], body)]
    story += section(data['skills_heading'])
    story += [Paragraph(text, body) for text in data['skills']]
    education = section(data['education_heading']) + [Paragraph(text, body) for text in data['education']]
    languages = section(data['languages_heading']) + [Paragraph(text, body) for text in data['languages']]
    footer = Table([[education, languages]], colWidths=[(doc.width-12)*.6, (doc.width-12)*.4], hAlign="LEFT")
    footer.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(0,0),18),('RIGHTPADDING',(1,0),(1,0),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0)]))
    story += [footer]
    doc.build(story)
    print(output)


if __name__ == '__main__':
    for language in ('en', 'ru'):
        generate(language)
