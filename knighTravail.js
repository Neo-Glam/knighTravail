class Board {
  constructor() {
    this.visited = [];
  }
  checkBoard(x, y) {
    return x > -1 && x < 8 && y > -1 && y < 8;
  }
  checkVisited(x, y) {
    return this.visited.some(
      (arr) => arr.length === 2 && arr[0] === x && arr[1] === y
    );
  }
  insertVisited(x, y) {
    const visitedNode = [x, y];
    this.visited.push(visitedNode);
  }
  nextMoves(x, y) {
    const possibleMoves = [];
    //  const moveA =
    //     this.checkBoard(x + 1, y + 2) && !this.checkVisited(x + 1, y + 2);
    if (this.checkBoard(x + 1, y + 2) && !this.checkVisited(x + 1, y + 2))
      possibleMoves.push([x + 1, y + 2]);
    // const moveB =
    //   this.checkBoard(x - 1, y + 2) && !this.checkVisited(x - 1, y + 2);
    if (this.checkBoard(x - 1, y + 2) && !this.checkVisited(x - 1, y + 2))
      possibleMoves.push([x - 1, y + 2]);
    // const moveC =
    //   this.checkBoard(x + 1, y - 2) && !this.checkVisited(x + 1, y - 2);
    if (this.checkBoard(x + 1, y - 2) && !this.checkVisited(x + 1, y - 2))
      possibleMoves.push([x + 1, y - 2]);
    // const moveD =
    //   this.checkBoard(x - 1, y - 2) && !this.checkVisited(x - 1, y - 2);
    if (this.checkBoard(x - 1, y - 2) && !this.checkVisited(x - 1, y - 2))
      possibleMoves.push([x - 1, y - 2]);
    // const moveE =
    //   this.checkBoard(x + 2, y + 1) && !this.checkVisited(x + 2, y + 1);
    if (this.checkBoard(x + 2, y + 1) && !this.checkVisited(x + 2, y + 1))
      possibleMoves.push([x + 2, y + 1]);
    // const moveF =
    //   this.checkBoard(x - 2, y + 1) && !this.checkVisited(x - 2, y + 1);
    if (this.checkBoard(x - 2, y + 1) && !this.checkVisited(x - 2, y + 1))
      possibleMoves.push([x - 2, y + 1]);
    // const moveG =
    //   this.checkBoard(x + 2, y - 1) && !this.checkVisited(x + 2, y - 1);
    if (this.checkBoard(x + 2, y - 1) && !this.checkVisited(x + 2, y - 1))
      possibleMoves.push([x + 2, y - 1]);
    // const moveH =
    //   this.checkBoard(x - 2, y - 1) && !this.checkVisited(x + 2, y - 1);
    if (this.checkBoard(x - 2, y - 1) && !this.checkVisited(x - 2, y - 1))
      possibleMoves.push([x - 2, y - 1]);

    return possibleMoves;
  }
  knightMoves([x, y], [dest_x, dest_y]) {
    if (!this.checkBoard(dest_x, dest_y) || !this.checkBoard(x, y))
      return "coordinate not on board";
    if (x == dest_x && y == dest_y) return [[x, y]];

    const queue = [[[x, y]]];
    this.visited = [];
    this.insertVisited(x, y);
    while (queue.length > 0) {
      const path = queue.shift();
      const [cx, cy] = path[path.length - 1];

      for (let [nx, ny] of this.nextMoves(cx, cy)) {
        this.insertVisited(nx, ny);
        const newPath = [...path, [nx, ny]];

        if (nx === dest_x && ny === dest_y) {
          return newPath;
        }
        queue.push(newPath);
      }
    }
    return "no path"
  }
}

const plateau = new Board();
console.log("bob");
