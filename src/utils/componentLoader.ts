/*
* Loads a script from a given url and executes a callback function to inject
* a component to the DOM when the script is loaded
*/
export class ComponentLoader {
    private url:string
    constructor(url: string) {
        this.url = url;
        this.loadScript();
        this.loadCss();
        this.loadHtml();
    }
    private loadScript() {
        const scriptTag :HTMLScriptElement = document.createElement('script');
        scriptTag.type = 'module';
        scriptTag.src = `js/${this.url}.js`;
        document.head.appendChild(scriptTag);
        console.log(scriptTag.src)
    }

    private loadCss() {
        const linkTag: HTMLLinkElement = document.createElement('link');
        linkTag.rel = 'stylesheet';
        linkTag.href = `css/${this.url}.css`;
        console.log(linkTag.href)
        document.head.appendChild(linkTag);
    }

    private loadHtml() {
        // Determine the element that will host the HTML content.
        // This is based on the URL, which should be something like "components/header/header".
        const componentName = this.url.split('/')[1];  // This should be like "header"
        const hostElement = document.querySelector(`app-${componentName}`);

        // Only proceed if the host element exists
        if (hostElement) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `${this.url}.html`, true);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    hostElement.innerHTML = xhr.responseText;
                }
            };

            xhr.send();
        }
    }
}

