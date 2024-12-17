// // const add = require('./add')

// // const sum = add(12,12);

// // console.log(sum)


// require('./batman')
// const Superhero = require('./superhero')//module loaded and cached

// console.log(superhero.getname());
// superhero.setname("vasile");
// const newsuperhero = require('./superhero')
// console.log(newsuperhero.getname());


// const { add, subtract } = require('./math');
// console.log(add(2, 3));
// console.log(subtract(2, 3));



// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping) => { //listener of the event
//     console.log(`Order received. One pizza of size ${size} with ${topping}`);
// });

// emitter.on("order-pizza", (size) => { //another listener of the event
//     if(size === "large"){
//         console.log("Serving complementary drink! ");
//     }
// });

// emitter.emit("order-pizza", "large", "mushroom");//emit the event


// const PizzaShop = require('./pizza-shop')

// const ps = new PizzaShop();

// ps.on("order", (size, topping) => {
// console.log(`order received ${size} ${topping}`);
// });

// ps.order("large", "muhroom");

// ps.displayOrderNumber();


// const buffer = new Buffer.from("Vasile");

// console.log(buffer.toJSON())


// const fs = require("node:fs");

// console.log("First");
// const fileContent = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContent);

// console.log("Second");

// fs.readFile("./file.txt", "utf-8", (error, data) => {
//     if (error) {
//         console.error(error);
//     }
//     else {
//         console.log(data);
//     }

// })

// console.log("Third");


// fs.writeFileSync("./greet.txt", "Hello world")
// fs.writeFile("./greet.txt", "Hello world123", { flag: "a" }, (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("File updated");
//     }
// })


// const { read } = require("node:fs");
// const fs = require("node:fs/promises");

// async function readFile() {
//     try {
//         const fileContent = await fs.readFile("./file.txt", "utf-8")
//         console.log(fileContent);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// readFile();

// console.log("First");

// const fileContent = fs.readFile("./file.txt", "utf-8")
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// console.log("second");


// const fs = require("node:fs");
// const zlib = require("node:zlib");

// const gzip = zlib.createGzip();

// const readStream = fs.createReadStream("./file.txt", {
//     encoding: "utf-8",
//     highWaterMark: 2//transfer only 2 bytes
// });

// readStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))

// const writeStream = fs.createWriteStream("./file2.txt");

//  readStream.pipe(writeStream);//write the content of the readstream into the writestream


// readStream.on("data", (chunk) => {
//     console.log(chunk);
//     writeStream.write(chunk);
// })



const http = require("node:http")
const fs = require("node:fs");
const https = require("node:https")

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" })

//     const name = "Vasile"

//     let html = fs.readFileSync("./index.html", "utf-8");
//     html = html.replace("{{name}}", name)



//     // fs.createReadStream(__dirname + "/index.html").pipe(res)
//     res.end(html)
// });



const server = http.createServer((req, res) => {
    const headers = new Map();

    headers.set('Access-Control-Allow-Origin', '*')
    headers.set('Access-Control-Allow-Methods', 'OPTIONS, POST, GET',)

    res.setHeaders(headers)

    if (req.method === 'OPTIONS') {
        res.writeHead(204, headers)
        res.end()
        return
    }

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end("Home page");
    }
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(JSON.stringify("about page"));
    }
    else if (req.url === "/api") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            firstName: "Vasile"
        }));
    }
    else {
        res.writeHead(404)
        res.end("Page not found");
    }
});


server.listen(3000, () => {
    console.log("server running on port 3000");
})

// const crypto = require("node:crypto")

// process.env.UV_THREADPOOL_SIZE = 5;//thread pool size

// const max_calls = 5;

// const start = Date.now();

// for (let i = 0; i < max_calls; i++) {
//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log(`Hash: ${i + 1}`, Date.now() - start);
//     })
// }

// const max_calls = 30;

// const start = Date.now();

// for (let i = 0; i < max_calls; i++) {
//     https
//         .request("https://www.google.com", res => {
//             res.on("data", () => { });
//             res.on("end", () => {
//                 console.log(`Request: ${i + 1}`, Date.now() - start);
//             })
//         })
//         .end();
// }


// let items = [];

// const arr = [];
// for (let i = 0; i < 100000; i++) {
//     arr.push(i);
// }


// const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// console.log("Before")

// let promise = new Promise(async (resolve, reject) => {
//     arr.forEach(async item => {
//         let _ = await sleep(1000); //simulate uploading

//         items.push(item);
//         console.log(`${item} processed`);
//     })
// })

// new Promise(async (resolve, reject) => {
//     for (const item in arr) {
//         let _ = await sleep(500); //simulate uploading

//         items.push(item);
//         console.log(`${item} processed`);
//     }

// })


// console.log("After")
