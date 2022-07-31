export class User {
    id: number;
    firstName: string;
    lastName: string;
    phonenumber: string;
    email: string;

    constructor(id: number = 0, firstName: string = "No", lastName: string = "Body", phonenumber: string = "(000) 555-1234", email: string = "no@body.com") {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phonenumber = phonenumber;
    }
}