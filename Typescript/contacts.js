"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.people = [];
    }
    Contacts.prototype.printCalendar = function () {
        for (var i = 0; i < this.people.length; i++) {
            console.log(this.people);
        }
    };
    return Contacts;
}());
exports.Contacts = Contacts;
// personas.push(persona1, persona2);
