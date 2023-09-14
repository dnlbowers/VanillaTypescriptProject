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
    }
    private loadScript() {
        const scriptTag :HTMLScriptElement = document.createElement('script');
        scriptTag.type = 'module';
        scriptTag.src = `js/${this.url}.js`;
        document.head.appendChild(scriptTag);
    }

    private loadCss() {
        const linkTag: HTMLLinkElement = document.createElement('link');
        linkTag.rel = 'stylesheet'
        linkTag.href = `css/${this.url}.css`
        document.head.appendChild(linkTag)
    }
}





