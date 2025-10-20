import { LocationService, Location } from "./location.service";

/**
 * Control your CuteBot Pro in an environment with rectangular coördinates.
 */
//% weight=70 icon="\uf84c" color=#EC7505
namespace carLocation {

    export class Position {

        locationService = new LocationService();

        /**
         * Reset system
         */
        //% blockId=position_reset block="reset location"
        //% position.defl=position
        //% weight=85 blockGap=8
        //% parts="location"
        reset(): boolean {
            this.locationService.reset();
            return true;
        }

        /**
         * Read location
         */
        //% blockId=position_read block="read coördinates"
        //% position.defl=position
        //% weight=85 blockGap=8
        //% parts="location"
        // read(): {x:number;y:number} {
        read(): Location {
            return this.locationService.read();
        }

        /**
         * Goto a location
         */
        //% blockId=position_goto block="goto %x %y"
        //% position.defl=position
        //% weight=85 blockGap=8
        //% parts="location"
        goto(x: number, y: number): boolean {
            this.locationService.goto(x,y);
            return true;
        }

    }
}
