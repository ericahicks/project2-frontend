export class RoomSearchParamsDto {
    roomTypeId: number;
    checkin: Date;
    checkout: Date;

    constructor(roomTypeId: number, checkin: Date, checkout: Date) {
        this.roomTypeId = roomTypeId;
        this.checkin = checkin;
        this.checkout = checkout;
    }
}