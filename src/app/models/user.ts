export class User {
    id: number;
    firstName: string;
    lastName: string;
    number: string;
    email: string;

    constructor(id: number = 0, firstName: string = "No", lastName: string = "Body", 
    number: string = "(000) 555-1234", email: string = "no@body.com") {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.number = number;
    }
}