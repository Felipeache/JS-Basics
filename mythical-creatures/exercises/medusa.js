class Medusa {
    constructor(name, job) {
        this._name = name;
        this._statues = [];
        this._cursed = false;
        this._booty = 0;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
    
    get statues() {
        return this._statues;
    }

    // set statues(newStatue) {
    //     this._statues = newStatue;
    // }

    get cursed(){
        return this._cursed;
    }

    get booty(){
        return this._booty;
    }

    stare(victime) { 
    
        if (this._statues.length >2){
            first = this._statues[0];
            this._statues.shift();
            first.stoned();
        }
        this._statues.push(victime);
        victime.stoned();

    }

}

module.exports = Medusa;
