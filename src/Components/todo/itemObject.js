class Item {
  constructor(text, id, complete, owner, listId) {
    this.text = text;
    this.id = id || null;
    this.complete = complete || false;
    this.owner = owner || null;
    this.listId = listId || Date.now();
  }
  toggleComplete() {
    this.complete = !this.complete
  }
  changeList(newListId) {
    if(!newListId){
      throw Error(`have to change to a valid listId. listId of "${listID}" is not valid entry`)
    } else {
      this.listId = newListId;
    }
  }
  changeOwner(newOwner) {
    if(!newOwner){
      throw Error(`newOwner "${newOwner}" is not a valid entry`)
    } else {
      this.owner = newOwner;
    }
  }
}

export default Item;
