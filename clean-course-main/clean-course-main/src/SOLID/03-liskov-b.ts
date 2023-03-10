export abstract class Vehicle {
    //getNumberOfSeats():number{
        //throw Error('Method not implemented')
    abstract getNumberOfSeats(): number; // las clases que extiendan de mi clase abstracta, implementarán los métodos y propiedades
    }

export class Tesla  extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota {

    constructor( private numberOfSeats: number ) {}

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}