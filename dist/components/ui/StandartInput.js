"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const StandartInput = (props) => {
    return (react_1.default.createElement("input", { type: props.type, id: props.id, name: props.name, placeholder: props.name, className: `${props.additionalClasses} rounded-md	border-2 border-darkerGrey h-12 pl-7 w-full` }));
};
exports.default = StandartInput;
//# sourceMappingURL=StandartInput.js.map