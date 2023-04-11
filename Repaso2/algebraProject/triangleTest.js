"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triangle_1 = require("./triangle");
var point_1 = require("./point");
var punt1 = new point_1.Point(1, 1);
var punt2 = new point_1.Point(2, 2);
var punt3 = new point_1.Point(3, 3);
var miTriangulo = new triangle_1.Triangle(punt1, punt2, punt3);
console.log(miTriangulo.calculateLengthSides());
