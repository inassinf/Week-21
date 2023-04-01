"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contacts_1 = require("./contacts");
var person_1 = require("./person");
var persona3 = new person_1.Person("Jose", 25, "Malaga");
var persona4 = new person_1.Person("Maria", 30, "Valencia");
var contactos = new contacts_1.Contacts();
contactos.people.push(persona3, persona4);
contactos.printCalendar();
