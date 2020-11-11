class Stark {
    constructor(name, location) {
        this._name = name;
        this._location = location || "Winterfell";
        this._safe = false;
    }

    get name() {
        return this._name;
    }

    get location(){
        return this._location;
    }

    get safe(){
        return this._safe
    }

    set name(newName) {
        this._name = newName;
    }

    Safe(value){
        this._safe = value;
        return this._safe;
    }

    houseWords() { 
        if (this._safe){
            return ('The North Remembers')
        }else{
            return ('Winter is Coming')
            }
    }

}
module.exports = Stark;




