import React from "react";
import { render, mount } from "enzyme";

import Header from "../Header";

describe(Header, () => {
    describe("Render", () => {
        let wrapper;

        // Inicializamos el componente en un beforeEach para
        // evitar tener que repetir esta línea en cada test
        beforeEach(() => {
            wrapper = render(<Header />);
        });

        it("agrega los elementos HTML", () => {
            expect(wrapper.find("a").length).toBe(1);
            expect(wrapper.find("button").length).toBe(1);
            expect(wrapper.find("nav").length).toBe(1);
            expect(wrapper.find("span").length).toBe(1);
        });

        it("muestra", () => {
            expect(wrapper.find("navbar-brand").text()).toBe("");
        });
    });

});