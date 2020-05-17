import { SumOnJetBrasHandsOn, DrawerOnJetBrainsHandsOn } from './sample.functions';

const firstNumber: number = 4;
const secondNumber: number= 7;

const result: number = SumOnJetBrasHandsOn(firstNumber, secondNumber);
console.log(result);

const array: ReadonlyArray<number> = [1, 2, 3];
array.forEach((value: number) => {
    console.log(value);
});

const refactorArray: Array<number> = [];
const baseArray: ReadonlyArray<number> = [1, 3, 5, 9];
baseArray.forEach((value: number) => {
    refactorArray.push(value);
});

const drawer: DrawerOnJetBrainsHandsOn = new DrawerOnJetBrainsHandsOn();
drawer.Draw("Welcome to IntelliJ IDEA's swamp......");