"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Titles_1 = require("./ui/Titles");
const StandartInput_1 = __importDefault(require("./ui/StandartInput"));
const Form = () => {
    return (react_1.default.createElement("div", { className: "mx-7 mt-7" },
        react_1.default.createElement(Titles_1.BigTitle, { title: "Add Menu Item" }),
        react_1.default.createElement("form", { className: "mt-7" },
            react_1.default.createElement(StandartInput_1.default, { type: "text", name: "Name", id: "name" }),
            react_1.default.createElement(StandartInput_1.default, { type: "number", name: "Price", id: "price", additionalClasses: "mt-5" }),
            react_1.default.createElement(StandartInput_1.default, { type: "text", name: "Image Description", id: "imageDescription", additionalClasses: "mt-5" }))));
};
exports.default = Form;
//# sourceMappingURL=Form.js.map