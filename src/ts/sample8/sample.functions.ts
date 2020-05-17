interface Drawer {
    Draw: (text: string) => void;
}

export class DrawerOnJetBrainsHandsOn implements Drawer {
    #idCounter: number;

    constructor() {
        this.#idCounter = 0;
    }

    /*
    * HTMLに文字を描画します。
    * @param {text}[文字列に変換可能オブジェクト]
    */
    Draw(text: string): void {
        const element: HTMLDivElement = document.createElement('div');
        element.setAttribute('id', this.#idCounter.toString());
        this.#idCounter++;
        element.innerText = text.toString();
        document.body.appendChild(element);
    }
}


export function sumOnJetBrasHandsOn(a: number, b: number): number {
    return a + b;
}