"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Logo_1 = __importDefault(require("./ui/Logo"));
const Header = () => {
    return (react_1.default.createElement("nav", { className: "bg-softWhite" },
        react_1.default.createElement(Logo_1.default, null)));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map