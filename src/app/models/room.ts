import { Roomtype } from "./roomtype";

export class Room {
    roomnumber: number;
    roomType: Roomtype;

    constructor(roomnumber: number, roomType: Roomtype) {
        this.roomType = roomType;
        this.roomnumber = roomnumber;
    }
}