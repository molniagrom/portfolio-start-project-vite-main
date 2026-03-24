import {render, screen} from "@testing-library/react";
import App from "../src/App";
import {ThemeModeProvider} from "../src/context/ThemeModeContext";

describe("App smoke test", () => {
  it("renders the main hero heading", () => {
    render(
      <ThemeModeProvider>
        <App />
      </ThemeModeProvider>,
    );

    expect(screen.getByRole("heading", {name: /frontend developer/i})).toBeInTheDocument();
  });

  it("renders the projects section", async () => {
    render(
      <ThemeModeProvider>
        <App />
      </ThemeModeProvider>,
    );

    expect(await screen.findByRole("heading", {name: /projects/i})).toBeInTheDocument();
  });

  it("renders the contact section", async () => {
    render(
      <ThemeModeProvider>
        <App />
      </ThemeModeProvider>,
    );

    expect(await screen.findByRole("heading", {name: /contact us/i})).toBeInTheDocument();
  });
});
