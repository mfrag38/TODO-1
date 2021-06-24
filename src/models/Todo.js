export default class Todo {
  constructor(name, isDone) {
    this.name = name;
    this.isDone = isDone;
  }

  getName() {
    return this.name;
  }

  getIsDone() {
    return this.isDone;
  }

  setName(name) {
    this.name = name;
  }

  setIsDone(isDone) {
    this.isDone = isDone;
  }
}
