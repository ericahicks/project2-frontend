export class ResrvationInfoDto {

    reservationId: number;
    roomnumber: number;
    checkin: Date;
    checkout: Date;
	
	userid: number;
	firstName: string;
	lastName: string;
	phonenumber: string;
	email: string;

    roomTypeId: number;
    roomTypeName: string;
    price: number;

    constructor (reservationId: number = 0, roomnumber: number = 100,
                checkin: Date, checkout: Date, userid: number, firstName: string,
                lastName: string, phonenumber: string, email: string, roomTypeId: number, 
                roomTypeName: string, price: number) {
        this.reservationId = reservationId;
        this.roomnumber = roomnumber;
        this.checkin = checkin;
        this.checkout = checkout;
        this.userid = userid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phonenumber = phonenumber;
        this.email = email;
        this.roomTypeId = roomTypeId;
        this.roomTypeName = roomTypeName;
        this.price = price;
    }
}