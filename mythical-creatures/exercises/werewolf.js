class Warewolf {
    constructor(name) {
        this._name = name;
        this._human = true;
        this._wolf = false;
        this._hungry = false;
        this._ableToEat = false;

    }

    get human(){
        return this._human;
    }

    get wolf(){
        return this._wolf;
    }

    get hungry(){
        return this._hungry;
    }

    get ableToEat(){
        return this._ableToEat;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
    
 
    transform() { 
        if (this._wolf){
            this._human = true;
            this._wolf = false;
            this._hungry = false;
            this._ableToEat = false;

        }else{
            this._human = false;
            this._wolf = true;
            this._hungry = true;
            this._ableToEat = true;
        }
        
    }

    eat (){
        this._human = true;
        this._wolf = false;
        this._hungry = false;
        this._ableToEat = false;
    }

}
module.exports = Warewolf;




