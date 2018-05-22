import * as express from 'express';

const app = express();

app.get('/', (request, response) => response.send('这里是首页'));

app.get('/stock', (request, response) => {
    response.json(stock);
});

app.get('/stock/:id', (request, response) => {
    response.json(stock.find((stock) => stock.id == request.params.id));
});

const server = app.listen(8080, 'localhost', () => {
    console.log('服务器已经启动， 地址是: http://localhost:8080');
});

export class Stock {
    constructor(public id: number,
        public name: string,
        public price: number,
        public rating: number,
        public desc: string,
        public categories: Array<string>
    ) { }
}

const stock:Stock[] = [
    new Stock(1, "第一只股票", 1.99, 3.5, "this is the 1 stock", ["ibm"]),
    new Stock(2, "第一只股票", 2.99, 7.5, "this is the 1 stock", ["ibm"]),
    new Stock(3, "第一只股票", 3.99, 2.5, "this is the 1 stock", ["ibm"]),
    new Stock(4, "第一只股票", 4.99, 6.5, "this is the 1 stock", ["ibm"]),
    new Stock(5, "第一只股票", 5.99, 2.5, "this is the 1 stock", ["ibm"]),
    new Stock(6, "第一只股票", 6.99, 4.5, "this is the 1 stock", ["ibm"]),
    new Stock(7, "第一只股票", 7.99, 1.5, "this is the 1 stock", ["ibm"]),
    new Stock(8, "第一只股票", 8.99, 8.5, "this is the 1 stock", ["ibm"]),
];