class Pirate {
    constructor(name, job) {
        this._name = name;
        this._job = job || "scallywag";
        this._cursed = false;
        this._booty = 0;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
    
    get job() {
        return this._job;
    }

    set job(newJob) {
        this._job = newJob;
    }

    get cursed(){
        return this._cursed;
    }

    get booty(){
        return this._booty;
    }

    robShip() { 
        this._booty += 100;
        return 'YAARRR!';
    }

}

module.exports = Pirate;
