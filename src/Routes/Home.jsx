import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Components/Home";
import { ContextGlobal, ContextGlobalProvider } from "../Components/utils/global.context";

describe("Home component", () => {
  test("renders Home page with data", async () => {
    const fakeData = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
      },
    ];

    render(
      <ContextGlobalProvider>
        <ContextGlobal.Provider value={{ state: { theme: "light", data: fakeData } }}>
          <Home />
        </ContextGlobal.Provider>
      </ContextGlobalProvider>
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Home");

    const cards = await screen.findAllByRole("link");
    expect(cards.length).toEqual(fakeData.length);

    cards.forEach((card, index) => {
      expect(card).toHaveAttribute("href", `/detail/${fakeData[index].id}`);
      expect(card).toContainHTML(`<h3>${fakeData[index].name}</h3>`);
      expect(card).toContainHTML(`<h3>${fakeData[index].username}</h3>`);
      expect(card).toContainHTML(`<h3>${fakeData[index].id}</h3>`);
    });
  });

  test("renders Home page with loading message", () => {
    render(
      <ContextGlobalProvider>
        <ContextGlobal.Provider value={{ state: { theme: "dark", data: null } }}>
          <Home />
        </ContextGlobal.Provider>
      </ContextGlobalProvider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
