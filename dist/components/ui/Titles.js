"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallTitle = exports.BigTitle = exports.DisplayTitle = void 0;
const react_1 = __importDefault(require("react"));
const DisplayTitle = (props) => {
    return (react_1.default.createElement("h1", { className: `${props.additionalClasses} text-4xl md:text-6xl font-display font-black md:mx-16` }, props.title));
};
exports.DisplayTitle = DisplayTitle;
const BigTitle = (props) => {
    return (react_1.default.createElement("h2", { className: `${props.additionalClasses} font-display text-base` }, props.title));
};
exports.BigTitle = BigTitle;
const SmallTitle = (props) => {
    return (react_1.default.createElement("h3", { className: `${props.additionalClasses} text-base font-display font-black` },
        props.preText,
        props.title));
};
exports.SmallTitle = SmallTitle;
//# sourceMappingURL=Titles.js.map