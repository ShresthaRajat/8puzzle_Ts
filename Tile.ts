export class Tile {
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
        let cTile = 0;
        let counter = 1;
        for (let entry of this.configuration) {
            if (counter == entry) {
                cTile = cTile + 1;
            }
            counter = counter + 1;
        }
        if (cTile >= 9) {
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
            new_index = index - 1
        }
        if (instruction == 'R') {
            new_index = index + 1
        }
        if (instruction == 'U') {
            new_index = index - 3
        }
        if (instruction == 'D') {
            new_index = index + 3
        }
        let x = childTile[new_index];
        childTile[index] = x;
        childTile[new_index] = 9;
        return childTile
    }
}
