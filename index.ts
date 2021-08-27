class Calc {
    constructor(public a: number, public b: number){};
    add() {
        this.a += this.b;
        return this;
    }
    mul() {
        this.a *= this.a;
        return this;
    }
    sayResult(): void {
        console.log(this.a);
    }
}

const calc = new Calc(1, 2);

calc.add().mul().sayResult();

/**
 * 1 + 2 = 3
 * 3 * 3 = 9
 * result  9
 */