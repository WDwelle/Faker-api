const express = require("express");
const app = express();
const port = 8000;
const faker = require('@faker-js/faker');
//===User creator===
const randomFName = faker.name.firstName();
const randomLName = faker.name.lastName();
const randomPhoneNumber = faker. phone.phoneNumber();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

//===company creator===
const randomCompany = faker.company.companyName();
const street = faker.address.streetAddress();
const city = faker.address.city();
const state = faker.address.state();
const zipCode = faker.address.zipCode();
const country = faker.address.country();

const id = faker.datatype.uuid();


class User {
    id ="";
    firstName = "";
    lastName = "";
    phoneNumber = "";
    email = "";
    password = "";
    constructor() {
        this. id = id;
        this.firstName = randomFName;
        this.lastName = randomLName;
        this.phoneNumber = randomPhoneNumber;
        this.email = randomEmail;
        this.password = randomPassword;
    }
}

class Company {
    id = "";
    name = "";
    address = "";
    constructor(){
        this.id = id;
        this.name = randomCompany;
        this.address = {
            street : street,
            city : city,
            state : state,
            zipCode : zipCode,
            country : country
        }
    }
}

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    res.json({
        user : new User(),
        company : new Company()
    });
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );