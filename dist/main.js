"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchEntity = exports.lastName = exports.firstName = void 0;
const readLine = require("readline");
const fs = require("fs");
var Entities;
(function (Entities) {
    Entities[Entities["firstName"] = 0] = "firstName";
    Entities[Entities["lastName"] = 1] = "lastName";
})(Entities || (Entities = {}));
var DataSource;
(function (DataSource) {
    DataSource["firstName"] = "./data/first_names.csv";
    DataSource["lastName"] = "./data/last_names.csv";
})(DataSource || (DataSource = {}));
/**
 * Generates a first name
 * @returns {String}: Returns a valid first name
 */
function firstName() {
    return __awaiter(this, void 0, void 0, function* () {
        const name = yield fetchEntity(Entities.firstName);
        return name.slice(0, -1);
    });
}
exports.firstName = firstName;
/**
 * Generates a last name
 * @return {String}: Returns a valid last name
 */
function lastName() {
    return __awaiter(this, void 0, void 0, function* () {
        const name = yield fetchEntity(Entities.lastName);
        return name.slice(0, -1);
    });
}
exports.lastName = lastName;
/**
 * Returns an random Entity of a choosen type from datasets.
 * @param position: Can be either firstName or lastName
 * @returns {String}: Returns a valid first name
 */
function fetchEntity(entity) {
    return __awaiter(this, void 0, void 0, function* () {
        const numberNames = 1642641;
        let dataSource = '';
        if (entity === Entities.firstName) {
            dataSource = DataSource.firstName;
        }
        else if (entity === Entities.lastName) {
            dataSource = DataSource.lastName;
        }
        const fileStream = fs.createReadStream(dataSource);
        const randomNumber = Math.floor(Math.random() * numberNames);
        const r1 = readLine.createInterface(fileStream);
        let name = '';
        let index = 0;
        r1.on('line', (line) => __awaiter(this, void 0, void 0, function* () {
            if (index === randomNumber) {
                name = line;
                r1.close();
            }
            index++;
        }));
        yield new Promise((resolve, reject) => {
            r1.on('close', data => {
                resolve(data);
            });
        });
        return name;
    });
}
exports.fetchEntity = fetchEntity;
firstName().then(name => console.log(`First ${name}`));
lastName().then(name => console.log(`Last ${name}`));
