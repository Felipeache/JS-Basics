class Person {
    constructor(name) {
        this._name = name || "Give me a name!";
        this._stoned = false;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
        return this._name;
    }

    get stoned() {
        return this._stoned;
    }
    

    stoned(){
        if(this._stoned){
            this._stoned = false;
        }else{
            this._stoned = true;
        }
        return this._stoned;
    } 

}

module.exports = Person;
