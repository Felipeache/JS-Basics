class Medusa {
    constructor(name) {
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

    get cursed(){
        return this._cursed;
    }

    get booty(){
        return this._booty;
    }

    stare(victim) { 
        if (this._statues.length === 3){
            this._statues[0].stoned();
            this._statues.shift();          
        }
        victim.stoned();
        this._statues.push(victim);

        return victim
    }

}

module.exports = Medusa;
