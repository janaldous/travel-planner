import React from 'react';
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import App from './App';

let container:Element;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
});

describe("App component", () => {
    it("shows correct day in left sidebar when clicking a day in the right sidebar", () => {
        act(() => {
            render(<App/>, container);
        });
    
        act(() => {
            container.querySelector("#day-1")?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(container.querySelector("#day")?.textContent).toBe("Showing day 1");
    });
})
