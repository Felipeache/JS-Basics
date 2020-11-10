class Vampire {
    constructor(name, pet) {
        this._name = name;
        this._pet = pet  || "bat";
        this.thirsty = true;
    }

    get pet() {
        return this._pet;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    thirsty() {
        return this._thirsty== true ? true : false;
    }

    drink() {
        this.thirsty = false;
    }
}

module.exports = Vampire;
