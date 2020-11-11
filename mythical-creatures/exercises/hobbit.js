class Hobbit {
    constructor(name, pet) {
        this._name = name;
        this._age = 0;
        this.thirsty = true;
        
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get age(){
        return this._age;
    }
    set age(newAge){
        this._age = newAge;
    }

    celebrateBirthday(){
        this._age++;
    }

    adult(){
        if (this._age === 32){
            return false;
        }
        if(this._age === 33){
            return true;
        }
    }

    old(){
        if (this._age === 100 || this._age != 101){
            return false;
        }
        if (this._age === 101){
            return true;
        }
    }

    hasRing(){
        let name = this._name;
        return name === 'Frodo' ? true : false;
    }
    

    }


module.exports = Hobbit;
