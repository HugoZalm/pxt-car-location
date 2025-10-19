enum TropicalFruit {
    //% block=banana
    Banana = 0,
    //% block=pineapple
    Pinapple = 1,
    //% block=coconut
    Coconut = 2
}


/**
 * Control your CuteBot Pro in an environment with rectangular coördinates .
 */
//% weight=70 icon="\uf84c" color=#EC7505
namespace location {
    export class Location {
        x: number;
        y: number;
        constructor(x?: number, y?: number) {
            this.x = x | -1;
            this.y = y | -1;
        }
    }

    export class position {
        // currentLocation: {x:number;y:number} = { x: 0, y: 0 };
        currentLocation: Location;
        
        constructor(){
            this.currentLocation = new Location();
        }

        /**
         * Reset system
         */
        //% blockId=position_reset block="reset location"
        //% position.defl=position
        //% weight=85 blockGap=8
        //% parts="location"
        reset(): boolean {
            this.currentLocation = new Location();
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
            return this.currentLocation;
        }

        /**
         * Goto a location
         */
        //% blockId=position_goto block="goto %x %y"
        //% position.defl=position
        //% weight=85 blockGap=8
        //% parts="location"
        goto(x: number, y: number): boolean {
            this.currentLocation = new Location(x,y); //{x, y };
            return true;
        }

    }
}