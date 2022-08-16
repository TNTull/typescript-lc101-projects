import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
       this.totalCapacityKg = totalCapacityKg;
       this.name = name;
    }

    sumMass( items: Payload[] ): number {
        let weightOFPayloads = 0;
        for (let i=0; i < items. length; i++) {
            weightOFPayloads += items[i].massKg;
        }
        return weightOFPayloads;
    }
    
    currentMassKg(): number {
        let combinedMass: number = 0;
        combinedMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return combinedMass;
    }

    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg; 
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }

 }