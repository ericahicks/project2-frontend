export class Roomtype {
    roomtypeid: number;
    name: string;
    price: number;

    constructor(roomtypeid: number, name: string, price: number, numberavailable: number) {
        this.roomtypeid = roomtypeid;
        this.name = name;
        this.price = price;
    }
}