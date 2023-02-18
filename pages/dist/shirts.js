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
exports.getServerSideProps = void 0;
var link_1 = require("next/link");
var react_1 = require("react");
var product_1 = require("../table/product");
var mongoose_1 = require("mongoose");
var shirts = function (props) {
    console.log(props.product);
    var color = props.product.color;
    console.log(color);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("section", { className: "text-gray-600 body-font" },
            react_1["default"].createElement("div", { className: "container px-5 py-24 mx-auto" },
                react_1["default"].createElement("div", { className: "flex flex-wrap justify-center -m-4" }, Object.keys(props.product).map(function (item) {
                    return react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(link_1["default"], { className: 'm-5', passHref: true, key: props.product[item]._id, href: "/products/" + props.product[item].slug },
                            react_1["default"].createElement("div", { className: " p-8 w-full cursor-pointer shadow-xl" },
                                react_1["default"].createElement("a", { className: "block relative h-48 rounded overflow-hidden" },
                                    react_1["default"].createElement("img", { alt: "ecommerce", className: "m-auto w-[30vh] h-[30vh] md:w-[30vh] md:h-[40vh] block", src: props.product[item].img })),
                                react_1["default"].createElement("div", { className: "mt-2" },
                                    react_1["default"].createElement("h3", { className: "text-gray-500 text-xs tracking-widest title-font mb-1" }, "T-Shirt"),
                                    react_1["default"].createElement("h2", { className: "text-gray-900 title-font text-lg font-medium" }, props.product[item].title),
                                    react_1["default"].createElement("p", { className: "mt-1" },
                                        "RS - ",
                                        props.product[item].price),
                                    react_1["default"].createElement("div", { className: 'mt-1' },
                                        props.product[item].size.includes('S') && react_1["default"].createElement("span", { className: ' border border-gray-300 px-1' }, "S"),
                                        props.product[item].size.includes('M') && react_1["default"].createElement("span", { className: 'mx-1 border border-gray-300 px-1' }, "M"),
                                        props.product[item].size.includes('L') && react_1["default"].createElement("span", { className: 'mx-1 border border-gray-300 px-1' }, "L"),
                                        props.product[item].size.includes('XL') && react_1["default"].createElement("span", { className: 'mx-1 border border-gray-300 px-1' }, "XL"),
                                        props.product[item].size.includes('XXL') && react_1["default"].createElement("span", { className: 'mx-1 border border-gray-300 px-1' }, "XXL")),
                                    react_1["default"].createElement("div", { className: 'mt-1' },
                                        props.product[item].color.includes('Red') && react_1["default"].createElement("button", { className: "border-2 border-gray-300 bg-red-600 rounded-full w-6 h-6 focus:outline-none" }),
                                        props.product[item].color.includes('Black') && react_1["default"].createElement("button", { className: "border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none" }),
                                        props.product[item].color.includes('Yellow') && react_1["default"].createElement("button", { className: "border-2 border-gray-300 ml-1 bg-yellow-400 rounded-full w-6 h-6 focus:outline-none" }),
                                        props.product[item].color.includes('Orange') && react_1["default"].createElement("button", { className: "border-2 border-gray-300 ml-1 bg-orange-600 rounded-full w-6 h-6 focus:outline-none" }),
                                        props.product[item].color.includes('Purple') && react_1["default"].createElement("button", { className: "border-2 border-gray-300 ml-1 bg-purple-600 rounded-full w-6 h-6 focus:outline-none" }),
                                        props.product[item].color.includes('White') && react_1["default"].createElement("button", { className: "border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none" }),
                                        props.product[item].color.includes('Blue') && react_1["default"].createElement("button", { className: "border-2 border-gray-300 ml-1 bg-blue-600 rounded-full w-6 h-6 focus:outline-none" }))))));
                }))))));
};
function getServerSideProps(context) {
    return __awaiter(this, void 0, void 0, function () {
        var product, tshirts, item, _i, product_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!mongoose_1["default"].connections[0].readyState) return [3 /*break*/, 2];
                    return [4 /*yield*/, mongoose_1["default"].connect(process.env.MONGODB_URI)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [4 /*yield*/, product_1["default"].find({ category: 'T_Shirt' })];
                case 3:
                    product = _a.sent();
                    tshirts = {};
                    for (_i = 0, product_2 = product; _i < product_2.length; _i++) {
                        item = product_2[_i];
                        if (item.title in tshirts) {
                            if (!tshirts[item.title].color.includes(item.color) && item.availableQty > 0) {
                                tshirts[item.title].color.push(item.color);
                            }
                            if (!tshirts[item.title].size.includes(item.size) && item.availableQty > 0) {
                                tshirts[item.title].size.push(item.size);
                            }
                        }
                        else {
                            tshirts[item.title] = JSON.parse(JSON.stringify(item));
                            if (item.availableQty > 0) {
                                tshirts[item.title].color = [item.color];
                                tshirts[item.title].size = [item.size];
                            }
                        }
                    }
                    return [2 /*return*/, { props: { product: JSON.parse(JSON.stringify(tshirts)) } }];
            }
        });
    });
}
exports.getServerSideProps = getServerSideProps;
exports["default"] = shirts;
