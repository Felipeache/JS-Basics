class Direwolf {
    constructor(name, home, size) {
        this._name = name;
        this._home = home || 'Beyond the Wall';
        this._size= size || 'Massive';
        this._starksToProtect = [];
    }

    get name() {
        return this._name;
    }

    get home(){
        return this._home;
    }

    get size(){
        return this._size;
    }

    get starksToProtect(){
        return this._starksToProtect;
    }

    set name(newName) {
        this._name = newName;
    }
    
 
    protect(starck) { 
        if (this.home === starck.location && this.starksToProtect.length<2){
                this.starksToProtect.push(starck)
                starck.Safe(true);
            }//else{
            //     return starck;
            // }
        }
    
    leave(stark){
        let del = this._starksToProtect.indexOf(stark)
        this._starksToProtect.splice(del,1)
        stark.Safe(false);
    
    }
    
    huntsWhiteWalkers(){
        return (this.starksToProtect.length == 0 ? true : false)
    }


}
module.exports = Direwolf;




