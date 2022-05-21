class Calc {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Please write a number')
            return;
        }}
            add ()
            {
                console.log(this.num1 + this.num2)
            }
            sub()
            {
                console.log(this.num1 - this.num2)
            }
            div()
            { if (this.num2 !== 0) {
                console.log(this.num1 / this.num2) }
                else { throw new Error(`Don't divide by 0`)}
            }
            mult()
            {
                console.log(this.num1 * this.num2)
            }

    }

const kalkulat = new Calc(5, 4);

console.log(kalkulat);

kalkulat.div();
kalkulat.mult();
console.log(kalkulat);

const numer1 = Number(prompt('cyfra1'));
const numer2 = Number(prompt('cyfra2'));

try {
    const calculator = new Calc(numer1, numer2);
    console.log(calculator);
    alert(`Pierwsza i druga cyfra jest ok ${numer1}, ${numer2}`)
} catch (error) {
    alert(`Stary, nie tak`)
}

