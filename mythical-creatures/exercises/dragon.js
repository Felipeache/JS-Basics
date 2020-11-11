class Dragon {

    constructor(name, rider, color) {
        this._name = name;
        this._color = color || "Grey";
        this._rider = rider || "Rider";
        this._hungry = true;
        this._eats = 0;
    }

    // Setting getters up...
    get name() {
        return this._name;
    }
    
    get color() {
        return this._color;
    }

    get rider(){
        return this._rider;
    }

    get hungry(){
        return this._hungry;
    }

    get eat(){
        return this.eats;
    }

    // Setting setters up...

    set name(newName) {
        this._name = newName;
    }

    set color(newColor) {
        this._color = newColor;
    }

    set rider(newRider) {
        this._rider = newRider;
    }


    get hungry() {
        return this._hungry;
    }

    eat() { 
        let times = this._eats++;
        // return this._eats < 3 ? true : false; 
        if ( times >= 3){
            this._hungry = false;
            return this._hungry;
        }
        else{
            return true;
        }
    }

}

    

module.exports = Dragon;
