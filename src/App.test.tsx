import React from 'react';
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import App from './App';
import { PlaceControllerApi } from "typescript-fetch-api";

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

// jest.mock("typescript-fetch-api")

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

    it("renders place data", async () => {
        const fakePlace = {
            "id": 26,
            "lat": 0.0,
            "lng": 0.0,
            "name": "New name",
            "description": "Forest with monkeys",
            "address": "Ubud",
            "day": 0,
        };
        
        PlaceControllerApi.prototype.getAllPlacesUsingGET = jest.fn(() => {
            return Promise.resolve([fakePlace]);
        });
    
        // Use the asynchronous version of act to apply resolved promises
        await act(async () => {
            render(<App/>, container);
        });
      
        expect(container.querySelector("#places-rest")?.firstChild?.textContent).toBe("New name");
    });
})
