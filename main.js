class Animal {
    constructor(go, run, sleep, haveWool) {
        this.go = go;
        this.run = run;
        this.sleep = sleep;
        this.haveWool = haveWool;
    }
    eat() {
        console.log(`Animal can sleep`);
    }
    canGo() {
        console.log(`Animal can go`);
    }
    wool() {
        if (this.haveWool == true) {
            console.log(`Animal with wool`);
        } else {
            console.log(`Animal without wool`);
        };
    }
}

class Herbivorous extends Animal {
    constructor(go, run, sleep, haveWool, eatHerb) {
        super(go, run, sleep, haveWool)
        this.eatHerb = eatHerb;
    }
    eatPlants() {
        console.log('Herbivorous eats herbs');
    }

}

class Predator extends Animal {
    constructor(go, run, sleep, haveWool, eatAnotherAnimals) {
        super(go, run, sleep, haveWool);
        this.eatAnotherAnimals = eatAnotherAnimals;

    }
    eatOtherAnimals() {
        console.log('Predator eats another animals');
    }
}

class Cow extends Herbivorous {
    constructor(go, run, sleep, haveWool, eatHerb, giveMilk) {
        super(go, run, sleep, haveWool, eatHerb);
        this.giveMilk = giveMilk;
    }
    milk() {
        console.log('Cow gives milk');
    }
}

class Sheep extends Herbivorous {
    constructor(go, run, sleep, haveWool, eatHerb, giveWool) {
        super(go, run, sleep, haveWool, eatHerb);
        this.giveWool = giveWool;
    }
    sheepGiveWool() {
        console.log('Sheep gives wool');
    }
}

class GreatWhiteShark extends Predator {
    constructor(go, run, sleep, haveWool, eatAnotherAnimals, isFish) {
        super(go, run, sleep, haveWool, eatAnotherAnimals)
        this.isFish = isFish
    }
    lifeTime() {
        console.log('Great whites can live up to 70 years old');
    }
}

class Crocodile extends Predator {
    constructor(go, run, sleep, haveWool, eatAnotherAnimals, isReptile) {
        super(go, run, sleep, haveWool, eatAnotherAnimals)
        this.isReptile = isReptile
    }
    heartType() {
        console.log(`A crocodile has a four-chambered heart like humans`);
    }

}

let cow = new Cow(true, true, true, false, true, true);
console.log(cow);
cow.eat();
cow.canGo();
cow.wool();
cow.eatPlants()
cow.milk();
console.log(`-----------------`);
let sheep = new Sheep(true, true, true, true, true, true);
console.log(sheep);
sheep.eat();
sheep.canGo();
sheep.wool();
sheep.eatPlants()
sheep.sheepGiveWool()
console.log(`-----------------`);
let greatWhiteShark = new GreatWhiteShark(false, false, true, false, true, true);
console.log(greatWhiteShark);
greatWhiteShark.eat();
greatWhiteShark.canGo();
greatWhiteShark.wool();
greatWhiteShark.eatOtherAnimals()
greatWhiteShark.lifeTime();
console.log(`-----------------`);
let crocodile = new Crocodile(true, true, true, false, true, true);
console.log(crocodile);
crocodile.eat();
crocodile.canGo();
crocodile.wool();
crocodile.heartType()