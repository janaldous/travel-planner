import React from 'react';
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import { Sidebar } from "./Sidebar";

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

it("renders side bar correctly", () => {
    act(() => {
        render(<Sidebar
        />, container);
    });
    expect(container.querySelector("#name")).toBeNull();
    expect(container.querySelector("#area")).toBeNull();
    expect(container.querySelector("#day")).toBeNull();
    
    act(() => {
        render(<Sidebar
            day={2}
            places={[]}
        />, container);
    });
    expect(container.querySelector("#name")).toBeNull();
    expect(container.querySelector("#area")).toBeNull();
    expect(container.querySelector("#day")?.textContent).toBe("Showing day 2");

    act(() => {
        render(<Sidebar
            clickedPlace={{area:"area", name:"name of place"}}
        />, container);
    });
    expect(container.querySelector("#name")?.textContent).toBe("name of place");
    expect(container.querySelector("#area")?.textContent).toBe("area");
    expect(container.querySelector("#day")).toBeNull();

    act(() => {
        render(<Sidebar
            clickedPlace={{area:"area", name:"name of place 1"}}
            day={2}
            places={[{lat: 101, lng: 101, area:"area", type:"type", text:"name of place 2"}]}
        />, container);
    });
    expect(container.querySelector("#name")?.textContent).toBe("name of place 1");
    expect(container.querySelector("#area")?.textContent).toBe("area");
    expect(container.querySelector("#day")?.textContent).toBe("Showing day 2");
});
