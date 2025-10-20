export class Location {
    x: number;
    y: number;
    constructor(x?: number, y?: number) {
        this.x = x ? x : -1;
        this.y = y ? y : -1;
    }
}

export class LocationService {
    public currentLocation: Location;
    constructor() {
        this.currentLocation = new Location();
    }
    public read(): Location {
        return this.currentLocation;
    }
    public goto(x: number, y: number): boolean {
        this.currentLocation = new Location(x, y);
        return true
    }
    public reset(): boolean {
        this.currentLocation = new Location(0,0);
        return true
    }
}
