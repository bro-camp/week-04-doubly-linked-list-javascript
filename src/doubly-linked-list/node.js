class Node {
  #data;

  #next;

  #prev;

  constructor(data, next = null, prev = null) {
    this.#data = data;
    this.#next = next;
    this.#prev = prev;
  }

  setData(data) {
    this.#data = data;
  }

  setNext(node) {
    this.#next = node;
  }

  setPrev(node) {
    this.#prev = node;
  }

  next() {
    return this.#next;
  }

  prev() {
    return this.#prev;
  }

  data() {
    return this.#data;
  }
}

module.exports = Node;
