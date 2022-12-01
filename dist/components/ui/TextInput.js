"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TextInput = (props) => {
    return (react_1.default.createElement("input", { type: "text", id: props.id, name: props.name, placeholder: props.name, className: "rounded-md\tborder-2 border-darkerGrey h-12 pl-7 w-full" }));
};
exports.default = TextInput;
//# sourceMappingURL=TextInput.js.map