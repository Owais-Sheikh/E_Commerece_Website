"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var image_1 = require("next/image");
var react_2 = require("react");
var ai_1 = require("react-icons/ai");
var md_1 = require("react-icons/md");
var Navbar = function (props) {
    var sideRef = react_2.useRef();
    var sidebar = function () {
        if (sideRef.current.classList.contains('translate-x-full')) {
            sideRef.current.classList.remove('translate-x-full');
            sideRef.current.classList.add('translate-x-0');
        }
        else if (!sideRef.current.classList.contains('translate-x-full')) {
            sideRef.current.classList.remove('translate-x-0');
            sideRef.current.classList.add('translate-x-full');
        }
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: 'flex flex-col items-center h-16 md:h-12 md:flex-row md:items-center shadow-md sticky top-0 z-10 bg-white ' },
            react_1["default"].createElement("div", { className: 'flex flex-row ml-6 mb-2 md:mb-0' },
                react_1["default"].createElement(image_1["default"], { src: '/favicon.ico', alt: 'Hello', width: 22, height: 4, className: 'mr-3' }),
                react_1["default"].createElement(link_1["default"], { href: '/' },
                    react_1["default"].createElement("p", { className: 'font-bold text-base' }, "Sheikh Clothes"))),
            react_1["default"].createElement("div", { className: 'flex flex-row justify-center md:ml-16 lg:ml-80 list-none mb-2 md:mb-0' },
                react_1["default"].createElement(link_1["default"], { href: '/' },
                    react_1["default"].createElement("li", { className: 'text-black mr-2 hover:bg-violet-600 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-1 py-1 text-sm md:px-3 md:py-1 rounded-2xl font-semibold md:mr-4' }, "Home")),
                react_1["default"].createElement(link_1["default"], { href: '/shirts' },
                    react_1["default"].createElement("li", { className: 'text-black mr-2 hover:bg-violet-600 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-1 py-1 text-sm md:px-3 md:py-1 rounded-2xl font-semibold md:mr-4' }, "Shirts")),
                react_1["default"].createElement(link_1["default"], { href: '/hoodies' },
                    react_1["default"].createElement("li", { className: 'text-black mr-2 hover:bg-violet-600 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-1 py-1 text-sm md:px-3 md:py-1 rounded-2xl font-semibold md:mr-4' }, "Hoodies")),
                react_1["default"].createElement(link_1["default"], { href: '/pants' },
                    react_1["default"].createElement("li", { className: 'text-black mr-2 hover:bg-violet-600 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-1 py-1 text-sm md:px-3 md:py-1 rounded-2xl font-semibold md:mr-4' }, "Pants")),
                react_1["default"].createElement(link_1["default"], { href: '/about' },
                    react_1["default"].createElement("li", { className: 'text-black mr-2 hover:bg-violet-600 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-1 py-1 text-sm md:px-3 md:py-1 rounded-2xl font-semibold md:mr-4' }, "About")),
                react_1["default"].createElement(link_1["default"], { href: '/contact' },
                    " ",
                    react_1["default"].createElement("li", { className: 'text-black mr-2 hover:bg-violet-600 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-1 py-1 text-sm md:px-3 md:py-1 rounded-2xl font-semibold md:mr-4' }, "Contact"))),
            react_1["default"].createElement("div", { className: 'flex' },
                react_1["default"].createElement(link_1["default"], { href: '\login' },
                    react_1["default"].createElement("span", { className: 'absolute top-2 right-20 text-xl md:text-3xl cursor-pointer' },
                        react_1["default"].createElement(md_1.MdAccountCircle, null))),
                react_1["default"].createElement("span", { onClick: sidebar, className: 'absolute top-2 right-7 text-xl md:text-3xl cursor-pointer' },
                    react_1["default"].createElement(ai_1.AiOutlineShoppingCart, null))),
            react_1["default"].createElement("div", { ref: sideRef, className: 'sideBar absolute z-10 top-0 w-72 right-0 h-[100vh] px-8 bg-indigo-100 transform transition-transform translate-x-full' },
                react_1["default"].createElement("h2", { className: 'text-center mt-10 font-bold' }, "Shopping Cart"),
                react_1["default"].createElement("span", { onClick: sidebar, className: 'absolute top-4 right-4 cursor-pointer text-xl text-indigo-800' },
                    react_1["default"].createElement(ai_1.AiFillCloseCircle, null)),
                react_1["default"].createElement("ol", { className: 'list-decimal my-5' },
                    Object.keys(props.cart).length == 0 && react_1["default"].createElement("div", null, "No item in the cart"),
                    Object.keys(props.cart).map(function (owais) {
                        return react_1["default"].createElement("li", { key: owais, className: 'mb-2' },
                            react_1["default"].createElement("div", { className: 'flex items-center' },
                                react_1["default"].createElement("div", { className: 'w-44' },
                                    props.cart[owais].name,
                                    " ", "(" + props.cart[owais].size,
                                    " ", "/ " + props.cart[owais].color + ")"),
                                react_1["default"].createElement("div", { className: 'flex justify-center items-center ml-8' },
                                    react_1["default"].createElement("span", { onClick: function () { props.removetoCart(owais, 1, props.cart[owais].name, props.cart[owais].size, props.cart[owais].color, props.cart[owais].price); }, className: 'm-2 text-indigo-800 cursor-pointer' },
                                        react_1["default"].createElement(ai_1.AiFillMinusCircle, null)),
                                    react_1["default"].createElement("div", null, props.cart[owais].quantity),
                                    react_1["default"].createElement("span", { onClick: function () { props.addtoCart(owais, 1, props.cart[owais].name, props.cart[owais].size, props.cart[owais].color, props.cart[owais].price); }, className: 'm-2 text-indigo-800 cursor-pointer' },
                                        react_1["default"].createElement(ai_1.AiFillPlusCircle, null)))));
                    })),
                react_1["default"].createElement("div", { className: 'font-semibold' },
                    "Subtotal = Rs. ",
                    props.total),
                react_1["default"].createElement("div", { className: 'flex' },
                    react_1["default"].createElement(link_1["default"], { href: '/checkout' },
                        react_1["default"].createElement("button", { className: "flex mx-auto mt-7 text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-md" }, "CheckOut")),
                    react_1["default"].createElement("button", { onClick: props.clearCart, className: "flex mx-auto mt-7 text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-md" }, "Clear Cart"))))));
};
exports["default"] = Navbar;
