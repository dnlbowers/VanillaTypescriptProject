import {loadScript} from "./utils/script-loader.js";

const componentRef: NodeListOf<Element> = document.querySelectorAll('[data-component]');
document.addEventListener("DOMContentLoaded", function () {
    componentRef.forEach((element: Element) => {
        const component = element.getAttribute('data-component');
        console.log(component)
        const fileName = `components/${component}/${component}`
        loadScript(fileName)
    });
});