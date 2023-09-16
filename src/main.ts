import {ComponentLoader} from "./utils/componentLoader.js";

const allElements: HTMLCollectionOf<Element> = document.getElementsByTagName('*');
const appElements: Element[] = Array.from(allElements).filter(el => el.tagName.toLowerCase().startsWith('app-'));

document.addEventListener("DOMContentLoaded", function () {
    /*
    * Cycles through the custom app-* elements and injects the scripts, style, and html
    */
    appElements.forEach((element: Element) => {
        const component: string = element.tagName.toLowerCase();  // Now it's like "app-header"
        const componentName: string = component.substring(4);  // Remove "app-" prefix, resulting in "header"
        console.log(componentName);
        const fileName = `components/${componentName}/${componentName}`;
        new ComponentLoader(fileName);
    });
});