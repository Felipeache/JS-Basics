class Unicorn {
  constructor(name, color) {
    this._name = name;
    this._color = color || 'white';
  }

  get color(){
    return this._color;
  }

  get name(){
    return this._name;
  }
  
  set name(name){
    this._name = name;
  }

  isWhite(){
    return this._color=='white' ? true : false;
  }

  says(string){
    return`**;* ${string} *;**`
  }


}



module.exports = Unicorn;
