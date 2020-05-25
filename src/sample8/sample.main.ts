import { sumOnJetBrainsHandsOn, DrawerOnJetBrainsHandsOn } from './sample.functions';

// 4は数値なのでnumber
const firstNumber: number = 4;
// 7は数値なのでnumber
const secondNumber: number = 7;

// sumOnJetBrainsHandsOn関数の戻り値はnumberなのでresultの型はnumberになる
const result: number = sumOnJetBrainsHandsOn(firstNumber, secondNumber);
console.log(result);

// arrayは今後変更されることがないので、変更できないことが保証されるReadonlyArrayを利用
// 配列の中身の型はnumberなので<>の中にnumberを指定する
const array: ReadonlyArray<number> = [1, 2, 3];
for (const num of array) {
    console.log(num);
}
// 上と処理は同じ
array.forEach((value: number) => {
    console.log(value);
});

// refactorArrayは数値が入る想定の配列。変更されることを許可
const refactorArray: Array<number> = [];
const baseArray: ReadonlyArray<number> = [1, 3, 5, 9];
for (const num of baseArray) {
    refactorArray.push(num);
}
// 上と処理は同じ
baseArray.forEach((value: number) => {
    refactorArray.push(value);
});

const drawer: DrawerOnJetBrainsHandsOn = new DrawerOnJetBrainsHandsOn();
drawer.draw("Welcome to IntelliJ IDEA's swamp......");