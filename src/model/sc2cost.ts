export class SC2Cost {
    minerals: number; 
    gas: number; 
    time: number; 
    supply: number; 

    constructor(minerals: number, gas: number, time: number, supply: number) {
        this.minerals = minerals;
        this.gas = gas; 
        this.time = time; 
        this.supply = supply;
    }
}