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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var router_1 = require("next/router");
var link_1 = require("next/link");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var login = function () {
    var router = router_1.useRouter();
    var _a = react_1.useState(), Email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(), password = _b[0], setpassword = _b[1];
    var handleChange = (function (e) {
        e.preventDefault();
        if (e.target.name == 'email') {
            setEmail(e.target.value);
        }
        else if (e.target.name == 'password') {
            setpassword(e.target.value);
        }
    });
    var submitInfo = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var data, hello, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    data = { Email: Email, password: password };
                    return [4 /*yield*/, fetch('http://localhost:3000/api/UserData/Login', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data)
                        })];
                case 1:
                    hello = _a.sent();
                    return [4 /*yield*/, hello.json()];
                case 2:
                    response = _a.sent();
                    console.log(response);
                    if (response.success) {
                        react_toastify_1.toast.success('You are successfully logged in', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark"
                        });
                        setTimeout(function () {
                            router.push('http://localhost:3000');
                        }, 1000);
                    }
                    else {
                        react_toastify_1.toast.error('Invalid Input', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark"
                        });
                    }
                    setEmail('');
                    setpassword('');
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_toastify_1.ToastContainer, { position: "top-right", autoClose: 5000, hideProgressBar: false, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true, theme: "dark" }),
        react_1["default"].createElement("section", null,
            react_1["default"].createElement("div", { className: "flex flex-col justify-center min- py-12 sm:px-6 lg:px-8" },
                react_1["default"].createElement("div", { className: "flex flex-col text-center sm:mx-auto sm:w-full sm:max-w-md" },
                    react_1["default"].createElement("h2", { className: "mt-6 text-3xl font-extrabold text-center text-neutral-600" }, "Sign in to your account"),
                    react_1["default"].createElement("div", { className: 'text-gray-500 text-sm mt-3' },
                        "OR  ",
                        react_1["default"].createElement(link_1["default"], { href: '/signup', className: 'text-blue-600 underline ml-1' }, "Sign Up"))),
                react_1["default"].createElement("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md" },
                    react_1["default"].createElement("div", { className: "px-4 py-8 sm:px-10" },
                        react_1["default"].createElement("form", { className: "space-y-6", onSubmit: submitInfo, method: "POST" },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700" }, " Email address "),
                                react_1["default"].createElement("div", { className: "mt-1" },
                                    react_1["default"].createElement("input", { onChange: handleChange, value: Email, id: "email", name: "email", type: "email", autoComplete: "email", required: true, className: "block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" }))),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700" }, " Password "),
                                react_1["default"].createElement("div", { className: "mt-1" },
                                    react_1["default"].createElement("input", { onChange: handleChange, value: password, id: "password", name: "password", type: "password", autoComplete: "current-password", required: true, className: "block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" }))),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between" },
                                react_1["default"].createElement("div", { className: "flex items-center" },
                                    react_1["default"].createElement("input", { id: "remember-me", name: "remember-me", type: "checkbox", className: "w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" }),
                                    react_1["default"].createElement("label", { htmlFor: "remember-me", className: "block ml-2 text-sm text-neutral-600" }, " Remember me ")),
                                react_1["default"].createElement("div", { className: "text-sm" },
                                    react_1["default"].createElement("a", { href: "/forget", className: "font-medium text-blue-600 hover:text-blue-500" }, " Forgot your password? "))),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("button", { type: "submit", className: "flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" }, "Sign in")))))))));
};
exports["default"] = login;
