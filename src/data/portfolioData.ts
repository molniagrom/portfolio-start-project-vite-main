export type ProjectItem = {
    id: number;
    title: string;
    image: string;
    imageAlt: string;
    type: ProjectType[];
    demoUrl: string;
    codeUrl: string;
};

export type ProjectType = "Pet Project" | "Teamwork" | "Commercial";

export type SocialLink = {
    label: string;
    href: string;
    iconId: string;
    mobileIconId?: string;
};

export const socialLinks: SocialLink[] = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/groza_frontend_dev?igsh=MXJubzl0Mjdma3Rleg==",
        iconId: "instagramColor",
        mobileIconId: "instagramWhite",
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/qr/7T2JGFMTO6YZB1",
        iconId: "whatsappColor",
        mobileIconId: "whatsappWhite",
    },
    {
        label: "Telegram",
        href: "https://t.me/MolniaG24",
        iconId: "telegramColor",
        mobileIconId: "telegramWhite",
    },
];

export const projects: ProjectItem[] = [
    {
        id: 1,
        title: "My Kinopoisk",
        image: "/kinopoisk1619602660_3-phonoteka_org-p-kinematograf-fon-3-700x433-1.jpg",
        imageAlt: "Preview of the My Kinopoisk movie app",
        type: ["Pet Project"],
        demoUrl: "https://my-kinopoisk-mauve.vercel.app/",
        codeUrl: "https://github.com/molniagrom/my_kinopoisk",
    },
    {
        id: 2,
        title: "Rick and Morty Explorer (Next JS)",
        image: "/RickMorty.jpg",
        imageAlt: "Preview of the Rick and Morty explorer app",
        type: ["Pet Project"],
        demoUrl: "https://next-app-rick-and-morty-five.vercel.app/",
        codeUrl: "https://github.com/molniagrom/next-app_rick_and_morty",
    },
    {
        id: 3,
        title: "Todolist 01",
        image: "/todolostil_fullxfull.2269636612_2elj.webp",
        imageAlt: "Preview of the Todolist 01 application",
        type: ["Pet Project"],
        demoUrl: "https://todolist-01-eight.vercel.app/login",
        codeUrl: "https://github.com/molniagrom/todolist-01",
    },
    {
        id: 4,
        title: "Music Fun (Tanstack Query)",
        image: "/placeholder-project.svg",
        imageAlt: "Preview of the Music Fun app with Tanstack Query",
        type: ["Pet Project"],
        demoUrl: "https://musicfuntanstack-query.vercel.app/",
        codeUrl: "https://github.com/molniagrom/tanstack-query-example",
    },
    {
        id: 5,
        title: "Starlions — Social Network",
        image: "/logo48x48.svg",
        imageAlt: "Preview of the Starlions social network app",
        type: ["Teamwork"],
        demoUrl: "https://starlionstech.org/",
        codeUrl: "https://github.com/starloinsfront/starlions",
    },
    {
        id: 6,
        title: "Get Together — Meetings Platform",
        image: "/logo-get-together.svg",
        imageAlt: "Preview of the Get Together meetings platform",
        type: ["Teamwork", "Commercial"],
        demoUrl: "https://minglehub.eu/",
        codeUrl: "https://github.com/vmccnc/meetings-web-react",
    },
];

export const projectFilters: ProjectType[] = ["Pet Project", "Teamwork", "Commercial"];

export const contactDetails = {
    location: "Tiraspol, Moldova",
    phone: "+373 000 000 00",
    email: "arkn3913@gmail.com",
    resumeUrl: "/resume.pdf",
};
