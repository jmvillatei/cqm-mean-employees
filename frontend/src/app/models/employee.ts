export class Employee {

    constructor(_id = "",
        first_name = "",
        surname = "",
        sec_surname = "",
        email = "",
        code = 0,
        phone = 0,
        birthdate = new Date(),
        age = 0,
        gender = "",
        address = "",
        city = "",
        country = "",

        email_company = "",
        position = "",
        workplace = "",
        salary = 0,

        comments = "",

        ) {

        this._id = _id;
        this.first_name = first_name;
        this.surname = surname;
        this.sec_surname = sec_surname;
        this.email = email;
        this.code = code;
        this.phone = phone;
        this.birthdate = birthdate;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.city = city;
        this.country = country;


        this.email_company = email_company;
        this.position = position;
        this.workplace = workplace;
        this.salary = salary;

        this.comments = comments;


    }
    _id: string;
    first_name: string;
    surname: string;
    sec_surname: string;
    email: string;
    code: number;
    phone: number;
    birthdate: Date;
    age: number;
    gender: string;
    address: string;
    city: string;
    country: string;

    email_company: string;
    position: string;
    workplace: string;
    salary: number;
    comments: string;

}