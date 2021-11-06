class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkList {
  constructor() {
    this.head = null;
  }
  addFront(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    console.log("added to the head " + value);
    return this.head;
  }

  //   addFront(value){
  //       const newNode = new Node(value);
  //       if(this.head === null){
  //         this.head = newNode;
  //         console.log("added as head node " + value);
  //     }
  //   }

  removeFront() {
    if (this.head === null) {
      return "this is an empty list. Add some data!";
    } else {
      this.head = this.head.next;
    }
    this.size--;
  }

  returnFront() {
    if (this.head === null) {
      return null;
    } else {
      return this.head.value;
    }
  }

  display() {
    let counter = 0;
    let current = this.head;
    let string = "";
    while (current) {
      string += counter + ". " + current.value + " ";
      current = current.next;
      counter++;
    }
    return `${string}`;
  }
}

let list = new LinkList();
list.addFront("joe");
// list.addFront("bill");
// list.addFront("sam")
console.log(list);
// console.log(list.display());
// list.removeFront();
console.log(list.display());
list.returnFront();
console.log(list.returnFront());
