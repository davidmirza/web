import { Injectable } from "@angular/core";
@Injectable()
export class ScriptLoader {
    private scripts: any = {};
    load(...scripts: string[]) {
        this.scripts = scripts;
        let promises: any[] = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }

    loadScript(name: string) {
        return new Promise((resolve, reject) => {
            let script = (document.createElement('script') as any);
            script.type = 'text/javascript';
            script.src = name;

            if (script.readyState) { 
                script.onreadystatechange = () => {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                        script.onreadystatechange = null;
                        resolve({script: name, loaded: true, status: 'Loaded'});
                    }
                };
            } else {
                script.onload = () => {
                    resolve({script: name, loaded: true, status: 'Loaded'});
                };
            }

            script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
            document.getElementsByTagName('head')[0].appendChild(script);
        });
    }

}
