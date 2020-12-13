class Item {
  constructor(text, id, complete, owner, listId) {
    this.text = text;
    this.id = id || null;
    this.complete = complete || false;
    this.owner = owner || null;
    this.listId = listId || Date.now();
    this.hidden = false;
  }
}

export default Item;
