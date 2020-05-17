interface Drawer {
    Draw: (text: string) => void;
}

export class DrawerOnJetBrainsHandsOn implements Drawer {
    #id_counter: number;

    constructor() {
        this.#id_counter = 0;
    }

    /*
    * HTMLに文字を描画します。
    * @param {text}[文字列に変換可能オブジェクト]
    */
    Draw(text: string): void {
        const element: HTMLDivElement = document.createElement('div');
        element.setAttribute('id',this.#id_counter.toString());
        this.#id_counter++;
        element.innerText=text.toString();
        document.body.appendChild(element);
    }
}


export function SumOnJetBrasHandsOn(a: number, b: number): number {
    return a + b;
}