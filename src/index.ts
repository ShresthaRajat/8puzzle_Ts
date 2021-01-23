import { Tile } from './Tile'
import { Queue } from './Queue'

// for bfs

const queue = new Queue<Tile>();
const puzzle = new Tile([], [9, 2, 3, 4, 5, 6, 7, 1, 8]);
let puzzleSet = new Set();
queue.enqueue(puzzle);

while (queue.size() > 0) {
    let received = queue.dequeue();
    let operations = received.instructions;
    if (received.getSolved()) {
        console.log(operations.toString())
        break
    }
    else {
        puzzleSet.add(received.configuration.toString());
        for (let i of received.getMoves()) {
            let newTileConfig = received.getChildTile(i);
            let newtileIns = received.instructions.slice();
            newtileIns.push(i);
            let newTile = new Tile(newtileIns, newTileConfig);
            console.log(newTile.configuration.toString(), queue.size());
            if (!puzzleSet.has(newTile.configuration.toString())){
                queue.enqueue(newTile);
            }
        }
    }

}
