import "@testing-library/jest-dom";
import {fireEvent, render, screen, waitFor, within} from "@testing-library/react";
import {afterEach, beforeEach, describe, expect, it, vi} from "vitest";
import emailjs from "@emailjs/browser";
import {Projects} from "../layout/sections/Projects/Projects";
import {Contact} from "../layout/sections/contact/Contact";
import {Main} from "../layout/sections/main/Main";
import {LanguageSwitcher} from "../components/LanguageSwitcher";
import i18n from "../i18n/i18n";
import {DesktopMenu} from "../components/menu/DesktopMenu";

vi.mock("@emailjs/browser", () => ({default: {sendForm: vi.fn()}}));

beforeEach(async () => {
    await i18n.changeLanguage("en");
    vi.stubEnv("VITE_EMAILJS_SERVICE_ID", "test-service");
    vi.stubEnv("VITE_EMAILJS_TEMPLATE_ID", "test-template");
    vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", "test-key");
    vi.mocked(emailjs.sendForm).mockReset();
});

afterEach(() => vi.unstubAllEnvs());

describe("Portfolio interactions", () => {
    it("downloads the approved PDF for the selected language", async () => {
        render(<><Main/><LanguageSwitcher/></>);
        const english = screen.getByRole("link", {name: "Download Resume"});
        expect(english).toHaveAttribute("href", "/en_cv_alina-groza.pdf");
        expect(english).toHaveAttribute("download");
        fireEvent.click(screen.getByRole("button", {name: "Switch language"}));
        const russian = await screen.findByRole("link", {name: "Скачать резюме"});
        expect(russian).toHaveAttribute("href", "/ru_cv_alina-groza.pdf");
        expect(russian).toHaveAttribute("download");
    });

    it("shows commercial work first and filters projects by category", async () => {
        const {container} = render(<Projects/>);
        expect(within(container.querySelector("article")!).getByRole("heading")).toHaveTextContent("Get Together");
        const commercial = screen.getByRole("button", {name: "Commercial"});
        fireEvent.click(commercial);
        expect(commercial).toHaveAttribute("aria-pressed", "true");
        await waitFor(() => expect(screen.queryByRole("heading", {name: "My Kinopoisk"})).not.toBeInTheDocument());
        expect(screen.getByRole("heading", {name: /Get Together/})).toBeInTheDocument();
        fireEvent.click(screen.getByRole("button", {name: "All projects"}));
        await waitFor(() => expect(screen.getAllByRole("article")).toHaveLength(6));
    });

    it("provides real anchor destinations in navigation", () => {
        render(<DesktopMenu items={[{title: "Projects", href: "projects"}, {title: "Contact", href: "contact"}]} mode="dark" onToggleTheme={() => {}}/>);
        expect(screen.getByRole("link", {name: "Projects"})).toHaveAttribute("href", "#projects");
        expect(screen.getByRole("link", {name: "Contact"})).toHaveAttribute("href", "#contact");
    });

    it("submits without a phone, prevents duplicate sends, and resets on success", async () => {
        let finish!: () => void;
        vi.mocked(emailjs.sendForm).mockImplementation(() => new Promise(resolve => {
            finish = () => resolve({status: 200, text: "OK"});
        }));
        const {container} = render(<Contact/>);
        fireEvent.change(screen.getByLabelText("E-mail *"), {target: {value: "recruiter@example.com"}});
        fireEvent.change(screen.getByLabelText("Name *"), {target: {value: "Recruiter"}});
        fireEvent.change(screen.getByLabelText("Message *"), {target: {value: "Please tell me more about your experience."}});
        expect(screen.getByLabelText("Phone (optional)")).not.toBeRequired();
        const form = container.querySelector("form")!;
        expect(form.checkValidity()).toBe(true);
        fireEvent.submit(form);
        expect(screen.getByRole("button", {name: "Sending..."})).toBeDisabled();
        fireEvent.submit(form);
        expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
        finish();
        expect(await screen.findByRole("status")).toHaveTextContent("Message sent successfully.");
        expect(screen.getByLabelText("E-mail *")).toHaveValue("");
    });

    it("preserves the message on failure and allows retry", async () => {
        vi.mocked(emailjs.sendForm).mockRejectedValueOnce(new Error("Network error")).mockResolvedValueOnce({status: 200, text: "OK"});
        const {container} = render(<Contact/>);
        fireEvent.change(screen.getByLabelText("Message *"), {target: {value: "Please contact me about a frontend role."}});
        fireEvent.submit(container.querySelector("form")!);
        expect(await screen.findByRole("status")).toHaveTextContent("Message could not be sent");
        expect(screen.getByLabelText("Message *")).toHaveValue("Please contact me about a frontend role.");
        expect(screen.getByRole("button", {name: "Send"})).toBeEnabled();
        fireEvent.submit(container.querySelector("form")!);
        await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Message sent successfully."));
    });

    it("offers direct contact when EmailJS is not configured", () => {
        vi.stubEnv("VITE_EMAILJS_SERVICE_ID", "");
        render(<Contact/>);
        expect(screen.queryByRole("button", {name: "Send"})).not.toBeInTheDocument();
        expect(screen.getByRole("link", {name: "mgrom250@gmail.com"})).toHaveAttribute("href", "mailto:mgrom250@gmail.com");
        expect(screen.getByText("Contact me directly by email or Telegram.")).toBeInTheDocument();
    });
});
