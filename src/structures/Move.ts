class Move {

    name: string;
    rating: number;
    type: string;
    
    constructor(name: string, rating: number, type: string) {
        this.name = name;
        this.rating = rating;
        this.type = type;
    }
}

export { Move }