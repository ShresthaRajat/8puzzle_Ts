class Tiles {
    instructions: Array<String>;
    readonly configuration: Array<number>;

    constructor(instructions: Array<String>, configuration: Array<number>) {
        this.instructions = instructions;
        this.configuration = configuration;
    }

    addInstruction(instruction: String) {
        this.instructions.push(instruction);
    }

    getSolved() {
        let cTiles = 0;
        let counter = 1;
        for (let entry of this.configuration) {
            if (counter == entry) {
                cTiles = cTiles + 1;
            }
            counter = counter + 1;
        }
        if (cTiles >= 9) {
            return (true);
        }
        return (false);

    }

    getMoves() {
        let moves = []
        let pos = this.configuration.indexOf(9)
        if (pos % 3 != 0) {
            moves.push("L")
        }
        if ((pos + 1) % 3 != 0) {
            moves.push("R")
        }
        if (pos - 3 > 0) {
            moves.push("U")
        }
        if (pos + 3 < 9) {
            moves.push("D")
        }
        return moves
    }

    getChildTile(instruction: String) {
        let childTile = this.configuration.slice();
        let index = childTile.indexOf(9);
        let new_index = index

        if (instruction == 'L') {
            console.log("** left")
            new_index = index - 1
        }
        if (instruction == 'R') {
            console.log("** right")
            new_index = index + 1
        }
        if (instruction == 'U') {
            console.log("** up")
            new_index = index - 3
        }
        if (instruction == 'D') {
            console.log("** down")
            new_index = index + 3
        }
        let x = childTile[new_index];
        childTile[index] = x;
        childTile[new_index] = 9;
        return childTile
    }
}

// const object_x = new Tiles([], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// object_x.addInstruction("right");
// console.log(object_x.getSolved());
// console.log(object_x.getMoves());
// console.log(object_x.getChildTile("L"));
// console.log(object_x.getChildTile("U"));
// console.log(object_x.configuration)

// const object_y = new Tiles([], [5, 2, 3, 4, 9, 6, 1, 8, 7]);
// console.log(object_y.getSolved());
// console.log(object_y.getMoves());
