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
const main_1 = require("../main");
const factory = new main_1.default();
test('Test Generating A Number In Range 0 to 3', () => {
    const value = factory.number(3, 0);
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(3);
});
jest.setTimeout(1000000);
test('Generate a first name', () => __awaiter(void 0, void 0, void 0, function* () {
    const name = yield factory.firstName();
    expect(name).not.toEqual('');
}));
test('Generate a last name', () => __awaiter(void 0, void 0, void 0, function* () {
    const name = yield factory.lastName();
    expect(name).not.toEqual('');
}));
test('Generate a Date Before or Including Today', () => {
    const today = Date.now();
    const generatedDate = factory.date(today);
    expect(generatedDate).toBeLessThanOrEqual(today);
});
test('Generate a Date Within The Past 10 Days', () => {
    const today = Date.now();
    let tenDaysAgo = new Date().setDate((new Date().getDate() - 10));
    const generatedDate = factory.date(today, tenDaysAgo);
    expect(generatedDate).toBeLessThanOrEqual(today);
    expect(generatedDate).toBeGreaterThanOrEqual(tenDaysAgo);
});
test('Generate a date in the future', () => {
    const today = Date.now();
    const sevenDaysLater = new Date().setDate(new Date().getDate() + 7);
    const generatedDate = factory.date(sevenDaysLater, today);
    expect(generatedDate).toBeGreaterThanOrEqual(today);
    expect(generatedDate).toBeLessThanOrEqual(sevenDaysLater);
});
test('Generate a company', () => __awaiter(void 0, void 0, void 0, function* () {
    const company = yield factory.company();
    const notEmpty = company !== '';
    expect(notEmpty).toBe(true);
}));
