"use strict";
exports.__esModule = true;
var react_1 = require("react");
var sliderm_1 = require("sliderm");
require("sliderm/src/assets/scss/index.scss");
var slider = function () {
    var sliderm = new sliderm_1["default"]('.your-class-name', {
        arrow: true,
        pagination: true,
        grouping: false,
        loop: true,
        preview: false,
        columns: 4,
        duration: 1000,
        spacing: 10,
        align: 'center'
    });
    sliderm.on('slide.start', function () {
        console.log('Just starting to slide!');
    });
    sliderm.on('slide.end', function () {
        console.log('The slider is stopped.');
    });
    return (react_1["default"].createElement("div", { className: "sliderm your-class-name" },
        react_1["default"].createElement("div", { className: "sliderm__slider" },
            react_1["default"].createElement("div", { className: "sliderm__slides" },
                react_1["default"].createElement("div", { className: "sliderm__slide" },
                    react_1["default"].createElement("img", { src: "./demo/1.jpg" })),
                react_1["default"].createElement("div", { className: "sliderm__slide" },
                    react_1["default"].createElement("img", { src: "./demo/2.jpg" })),
                react_1["default"].createElement("div", { className: "sliderm__slide" },
                    react_1["default"].createElement("img", { src: "./demo/3.jpg" })),
                react_1["default"].createElement("div", { className: "sliderm__slide" },
                    react_1["default"].createElement("img", { src: "./demo/4.jpg" })),
                react_1["default"].createElement("div", { className: "sliderm__slide" },
                    react_1["default"].createElement("img", { src: "./demo/5.jpg" }))))));
};
exports["default"] = slider;
