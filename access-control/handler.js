"use strict"

const fs = require('fs');

module.exports = (context, callback) => {
    if(process.env["Http_Query"] == "update=1") {
      fs.writeFile("/home/app/function/valid_user.txt", context, (err) => {
        return callback(err, {action: "update", value: context});
      });
    } else {
        fs.readFile("/home/app/function/valid_user.txt", "utf8", (err, val) => {
            return callback(err, {action: "get", value: val});
        });
    }
}

