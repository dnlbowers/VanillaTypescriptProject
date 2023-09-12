/*
* Loads a script from a given url and executes a callback function to inject
* a component to the DOM when the script is loaded
*/
 export const loadScript = (url: string) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = `${url}.js`;
    // script.onload = callback;
    document.head.appendChild(script);
}




