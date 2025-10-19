enum TropicalFruit {
    //% block=banana
    Banana = 0,
    //% block=pineapple
    Pinapple = 1,
    //% block=coconut
    Coconut = 2
}

// export interface Location {
//     x: number;
//     y: number;
// }

/**
 * Control your CuteBot Pro in an environment with rectangular coördinates .
 */
//% weight=70 icon="\uf84c" color=#EC7505
namespace location {
    const currentLocation: {x:number;y:number} = { x: 0, y: 0 };
    /**
     * Reset system
     */
    //% blockId=location_reset block="reset location"
    export function reset(): boolean {
        this.currentLocation = { x: 0, y: 0 };
        return true;
    }

    /**
     * Read location
     */
    //% blockId=location_read block="read coördinates"
    export function read(): {x:number;y:number} {
        return this.currentLocation;
    }

    /**
     * Goto a location
     */
    //% blockId=location_goto block="goto %x %y"
    export function goto(x: number, y: number): boolean {
        this.currentLocation = {x, y };
        return true;
    }

}