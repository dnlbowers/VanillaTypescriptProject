import {ComponentLoader} from "./utils/componentLoader.js";

const componentRef: NodeListOf<Element> = document.querySelectorAll('[data-component]');

document.addEventListener("DOMContentLoaded", function () {
    /*
    * Cycles through the data-component elements and injects the scripts, style and html
     */
    componentRef.forEach((element: Element) => {
        const component :string | null  = element.getAttribute('data-component');
        console.log(component)
        const fileName = `components/${component}/${component}`
        new ComponentLoader(fileName);
    });
});