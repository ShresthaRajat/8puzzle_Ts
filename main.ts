import { Tile } from './Tile.js'
import { Queue } from './Queue.js'

// for bfs

const queue = new Queue<Tile>();
const puzzle = new Tile([], [1, 2, 3, 4, 5, 6, 7, 9, 8]);
let puzzleSet = new Set();
queue.enqueue(puzzle);

while (queue.size() > 0) {
    let received = queue.dequeue();
    let operations = received.instructions;
    console.log(received);
    if (received.getSolved() == true) {
        console.log(operations)
    }
    else {
        console.log("not solved", received.configuration.toString());
        puzzleSet.add(received.configuration);
        console.log(received.getMoves());
        for (let i of received.getMoves()) {
            console.log(i);
            let newTile = received.getChildTile(i);
            console.log(newTile);
        }
    }

}
