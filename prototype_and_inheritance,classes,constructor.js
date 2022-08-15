
class animal {
    constructor (name) {
        this.name = name;
    }

    move () {
        console.log(`${this.name} is moving`);
    }
}

class cat extends animal {
    constructor (name) {
        super(name);
    }
}



const bob = new cat("bob");

bob.move();
