import { LocationService } from "./location.service";

let locationService = new LocationService();

let current = locationService.read();
console.log("Current LocationService: " + current.x + ", " + current.y);

locationService.reset();
current = locationService.read();
console.log("Current LocationService: " + current.x + ", " + current.y);

locationService.goto(10, 10);
current = locationService.read();
console.log("Current LocationService: " + current.x + ", " + current.y);
