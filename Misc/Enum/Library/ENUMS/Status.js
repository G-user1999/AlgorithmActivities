"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
var Status;
(function (Status) {
    Status[Status["Available"] = 1] = "Available";
    Status[Status["Reserved"] = 2] = "Reserved";
    Status[Status["Late Return"] = 3] = "Late Return";
    Status[Status["Borrowed"] = 4] = "Borrowed"; //Book is borrowed
})(Status || (exports.Status = Status = {}));
