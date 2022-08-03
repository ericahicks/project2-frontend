import { User } from "./user";

export class Reservation {
    reservationId: number;
    roomnumber: number;
    users: User;
    checkin: Date;
    checkout: Date;


    constructor (reservationId: number = 0, users: User = new User(), roomnumber: number = 100,
                 checkin: Date, checkout: Date) {
        this.reservationId = reservationId;
        this.users = users;
        this.roomnumber = roomnumber;
        this.checkin = checkin;
        this.checkout = checkout;
    }


}