import { User } from "./user";

export class Reservation {
    reservationId: number;
    roomnumber: string;
    users: User;
    checkin: Date;
    checkout: Date;


    constructor (reservationId = 0, users = new User(), roomnumber = '',
                 checkin: Date, checkout: Date) {
        this.reservationId = reservationId;
        this.users = users;
        this.roomnumber = roomnumber;
        this.checkin = checkin;
        this.checkout = checkout;
    }


}