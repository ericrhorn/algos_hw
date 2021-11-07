class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addNew(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  display(){
      let string = "";
      string += this.head.value;
      let current = this.head.next;
      while(current != null){
          string += ", " + current.value + " ";
          current = current.next;
      }
      return string;
  }
}

let list = new LinkList();
list.addNew("joe");
list.addNew("james");
list.addNew("dan");
list.addNew("joe");
console.log(list.display());

