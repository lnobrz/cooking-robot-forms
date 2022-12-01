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
const react_1 = require("react");
const useFetch = (url) => {
    const [fetchedData, setFetchedData] = (0, react_1.useState)([]);
    const [error, setError] = (0, react_1.useState)(null);
    const fetchSteps = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            const data = yield response.json();
            if (!data) {
                throw new Error("Something went wrong. Refresh the page and try again.");
            }
            for (const key in data) {
                setFetchedData(data[key]);
            }
        }
        catch (error) {
            setError(error.message);
        }
    }), [url]);
    (0, react_1.useEffect)(() => {
        fetchSteps();
    }, [fetchSteps]);
    return error ? error : fetchedData;
};
exports.default = useFetch;
//# sourceMappingURL=useFetch.js.map