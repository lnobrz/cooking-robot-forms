"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TextInput_1 = __importDefault(require("./TextInput"));
const FormUi = () => {
    return (react_1.default.createElement("form", null,
        react_1.default.createElement(TextInput_1.default, { name: "name", id: "name" })));
};
exports.default = FormUi;
//# sourceMappingURL=FormUi.js.map