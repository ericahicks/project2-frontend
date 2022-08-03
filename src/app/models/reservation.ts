import { User } from "./user";

export class Reservation {
    id: number;
    roomnumber: number;
    user: User;
    checkin: Date;
    checkout: Date;


    constructor (id: number = 0, user: User = new User(), roomnumber: number = 100,
                 checkin: Date, checkout: Date) {
        this.id = id;
        this.user = user;
        this.roomnumber = roomnumber;
        this.checkin = checkin;
        this.checkout = checkout;
    }


}