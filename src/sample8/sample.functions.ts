interface Drawer {
    draw: (text: string) => void;
}

export class DrawerOnJetBrainsHandsOn implements Drawer {
    #idCounter: number;

    constructor() {
        this.#idCounter = 0;
    }

    //
    draw(text: string): void {
        const element: HTMLDivElement = document.createElement('div');
        element.setAttribute('id', this.#idCounter.toString());
        this.#idCounter++;
        element.innerText = text;
        document.body.appendChild(element);
        // console.log(this.#idCounter);
        // console.log(text);
    }
}


export function sumOnJetBrainsHandsOn(a: number, b: number): number {
    return a + b;
}