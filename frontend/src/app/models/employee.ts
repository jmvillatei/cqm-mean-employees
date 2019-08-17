export class Employee {

    constructor(_id = "", first_name = "", surname = "", sec_surname = "",
     birthdate = new Date(1/1/1991), email_company = "", email = "", code = 0,
     phone = 0, position = "", workplace = "", salary = 0, contract = "", comments = "") {
        this._id = _id;
        this.first_name = first_name;
        this.surname = surname;
        this.sec_surname = sec_surname;
        this.birthdate = birthdate;
        this.email_company = email_company;
        this.email = email;
        this.code = code;
        this.phone = phone;
        this.position = position;
        this.workplace = workplace;
        this.salary = salary;
        this.contract = contract;
        this.comments = comments;
        this.process = "IN NEGOTATION";
        this.on_vacation = false;
        this.active = false;

    }
    _id: string;
    first_name: string;
    surname: string;
    sec_surname: string;
    birthdate: Date;
    email_company: string;
    email: string;
    code: number;
    phone: number;
    position: string;
    workplace: string;
    salary: number;
    contract: string;
    comments: string;
    process: string;
    on_vacation: boolean;
    active: boolean;
}
