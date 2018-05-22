"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (request, response) { return response.send('这里是首页'); });
app.get('/stock', function (request, response) {
    response.json(stock);
});
app.get('/stock/:id', function (request, response) {
    response.json(stock.find(function (stock) { return stock.id == request.params.id; }));
});
var server = app.listen(8080, 'localhost', function () {
    console.log('服务器已经启动， 地址是: http://localhost:8080');
});
var Stock = /** @class */ (function () {
    function Stock(id, name, price, rating, desc, categories) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Stock;
}());
exports.Stock = Stock;
var stock = [
    new Stock(1, "第一只股票", 1.99, 3.5, "this is the 1 stock", ["ibm"]),
    new Stock(2, "第一只股票", 2.99, 7.5, "this is the 1 stock", ["ibm"]),
    new Stock(3, "第一只股票", 3.99, 2.5, "this is the 1 stock", ["ibm"]),
    new Stock(4, "第一只股票", 4.99, 6.5, "this is the 1 stock", ["ibm"]),
    new Stock(5, "第一只股票", 5.99, 2.5, "this is the 1 stock", ["ibm"]),
    new Stock(6, "第一只股票", 6.99, 4.5, "this is the 1 stock", ["ibm"]),
    new Stock(7, "第一只股票", 7.99, 1.5, "this is the 1 stock", ["ibm"]),
    new Stock(8, "第一只股票", 8.99, 8.5, "this is the 1 stock", ["ibm"]),
];
