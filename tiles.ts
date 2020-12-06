class Tiles {
    instructions: Array<String>;
    readonly configuration: Array<number>;

    constructor(instructions: Array<String>, configuration: Array<number>) {
        this.instructions = instructions;
        this.configuration = configuration;
    }

}

interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T;
    size(): number;
}


// const object_x = new Tiles([], [1, 2, 3, 4, 5, 6, 7, 8, 9]);