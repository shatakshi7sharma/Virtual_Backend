// const fs = require("fs");
// const path = require('path');
// const { parse } = require("csv-parse");
// const pathName = path.join(__dirname, 'video-database_2023-03-27.csv');
//  let arr = []
// const readWriteCsv = (pathName) =>{
//          fs.createReadStream(pathName)
//         .pipe(parse({ delimiter: ",", from_line:  1}))
//         .on("data",  (row) =>{
//               arr  = [...row]
//             // console.log(arr)
//         })
//         return arr
// }
// console.log(readWriteCsv(pathName))
// console.log(arr)
// module.exports = {
//     readWriteCsv
// };
