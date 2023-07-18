// ES6
class Note{
    constructor(noteObject){
        for(let key in noteObject){
            this[key]= noteObject[key];
        }
        this.isMarked = false;
    }
    toggleMark(){
        this.isMarked = !this.isMarked;
    }
}
export default Note;
//export default Note; //it will go first in object. we can write default once in a file.