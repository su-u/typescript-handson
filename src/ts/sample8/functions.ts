class DrawerOnJetBrainsHandsOn {
    constructor(){
        this.id_counter=0;
    }

    /*
    * HTMLに文字を描画します。
    * @param {text}[文字列に変換可能オブジェクト]
    */
    Draw(text) {
        let element=document.createElement('div');
        element.setAttribute('id',this.id_counter.toString());
        this.id_counter++;
        element.innerText=text.toString();
        document.body.appendChild(element);
    }
}


function SumOnJetBrasHandsOn(a,b) {
    return a+b;
}