const express = require('express');
const app = express();

//nodejs file system to read our data stored in data folder
const fs = require('fs');

//nodejs streams (Memory and time efficient)
/*** Using streams you read it piece by piece, processing its content without keeping it all in memory.
 * Used to process real time data i.e. when we receive too much data 
 * and we have to process it real time. 
 * It notifies us when the data is available) ***/
const { Transform } = require('stream');

const config = require('./config/config.js');

app.get('/clob', (req, res) => {
  //Read stream to read the data stored in files 
    const stream = fs.createReadStream('./data/TW/order_5.txt');

    //console.log("Stream : ", stream);
  
    const breakOrderByLines = new Transform({
      readableObjectMode: true,
      transform(chunk, encoding, cb) {
        // "\n" splits by lines
        //TODO: Instead of console.log, use log library for effective logging
        console.log("Chunk = ", chunk.toString());
        console.log("Chunk converted to string = ", chunk.toString());
        this.push(chunk.toString().trim().split('\n'));
        cb();
      }
    });
  
    const breakOrder = new Transform({

      readableObjectMode: true,
      writableObjectMode: true,

      transform(orders, encoding, cb) {
        let parsed = orders.map((order) => {
          console.log("Order = " , order);
          //Split after a tab
          let specs = order.split(" ");
          console.log("Specs = " , specs);

          //Parse the amount
          specs[1] = parseFloat(specs[1]);
          console.log("Amount after parsing = " , parseFloat(specs[1]));

          //Parse the quantity 
          specs[2] = parseInt(specs[2]);
          console.log("Quantity after parsing = " , parseInt(specs[2]));
          return specs;
        });

        console.log("Result = ", JSON.stringify(parsed));
        this.push(JSON.stringify(parsed) + '\n');
        cb();
      }
    });
  
    stream
      .pipe(breakOrderByLines)
      .pipe(breakOrder)
      .pipe(res);
  });

//Response to any random route
app.get('*', (req, res) => {
    res.send('I do not know that path!');
})  
  
//Start listening to the mentioned port
app.listen(config.port, () => {
    console.log(`Listening on port = ${config.port}`)
});
  
  