import React from 'react';
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import { SidebarRight } from "./SidebarRight";

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

describe("Description of test", () => {
    it("does something", () => {
        const mockCallBack = jest.fn();
        
        act(() => {
            render(<SidebarRight
                onDayClick={mockCallBack}
                />, container);
        });
        expect(container.querySelector("#day-1")).not.toBeNull();
        expect(container.querySelector("#day-14")).not.toBeNull();
        expect(container.querySelector("#show-all")).not.toBeNull();
        
        const day1 = container.querySelector("#day-1");

        act(() => {
            day1?.dispatchEvent(new MouseEvent("click", { bubbles: true }))
        });

        expect(mockCallBack).toHaveBeenCalledTimes(1);
    });
});
