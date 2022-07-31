import { User } from "./user";

export class Reservation {
    id: number;
    roomnumber: number;
    user: User;
    checkin: string;
    checkout: string;


    constructor (id: number = 0, user: User = new User(), roomnumber: number = 100,
                 checkin: string = "2022-01-01", checkout: string = "2022-02-22") {
        this.id = id;
        this.user = user;
        this.roomnumber = roomnumber;
        this.checkin = checkin;
        this.checkout = checkout;
    }
}