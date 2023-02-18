"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
require("../styles/globals.css");
var Navbar_1 = require("./component/Navbar");
var Footer_1 = require("./component/Footer");
var react_1 = require("react");
function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    var _b = react_1.useState({}), cart = _b[0], setcart = _b[1];
    var _c = react_1.useState(), total = _c[0], settotal = _c[1];
    react_1.useEffect(function () {
        try {
            if (localStorage.getItem("cart")) {
                setcart(JSON.parse(localStorage.getItem("cart")));
                savetoCart(JSON.parse(localStorage.getItem("cart")));
            }
        }
        catch (error) {
            console.error(error);
            localStorage.clear();
        }
    }, []);
    var addtoCart = function (Id, quantity, name, size, color, price) {
        var myCart = cart;
        if (Id in cart) {
            myCart[Id].quantity = myCart[Id].quantity + quantity;
        }
        else {
            myCart[Id] = { quantity: 1, name: name, size: size, color: color, price: price };
        }
        setcart(myCart);
        savetoCart(myCart);
    };
    var removetoCart = function (Id, quantity, name, size, color, price) {
        var myCart = cart;
        if (Id in cart) {
            myCart[Id].quantity = myCart[Id].quantity - quantity;
        }
        if (myCart[Id].quantity <= 0) {
            delete myCart[Id];
        }
        setcart(myCart);
        savetoCart(myCart);
    };
    var savetoCart = function (myCart) {
        localStorage.setItem('cart', JSON.stringify(myCart));
        var subtotal = 0;
        var keys = Object.keys(myCart);
        for (var index = 0; index < keys.length; index++) {
            subtotal += myCart[keys[index]].price * myCart[keys[index]].quantity;
        }
        settotal(subtotal);
    };
    var clearCart = function () {
        setcart({});
        savetoCart({});
    };
    return React.createElement(React.Fragment, null,
        React.createElement(Navbar_1["default"], { total: total, cart: cart, addtoCart: addtoCart, removetoCart: removetoCart, savetoCart: savetoCart, clearCart: clearCart }),
        React.createElement(Component, __assign({ total: total, cart: cart, addtoCart: addtoCart, removetoCart: removetoCart, savetoCart: savetoCart, clearCart: clearCart }, pageProps)),
        React.createElement(Footer_1["default"], null));
}
exports["default"] = App;
