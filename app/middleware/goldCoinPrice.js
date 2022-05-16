var parseString = require('xml2js').parseString;
var rp = require('request-promise');
const axios = require('axios');


module.exports = async (req, res, next) => {
  let data;
  var coinJson;
  let xml = await rp({
    method: 'GET',
    uri: 'https://sjc.com.vn/xml/tygiavang.xml',
    json: true,
    "rejectUnauthorized": false
  });
  parseString(xml, function (err, result) {
    data = result.root.ratelist[0].city;
  });
  res.locals.goldPrice = data;

  // let response = null;
  // var coin = new Promise(async (resolve, reject) => {
  //   try {
  //     response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
  //       headers: {
  //         'X-CMC_PRO_API_KEY': 'af236d21-5c29-4e32-9397-f7bfa6e7bf23',
  //       },
  //       params: {
  //         'start':'1',
  //         'limit':'1',
  //         'convert':'USD'
  //        }
        
  //     });
  //   } catch (ex) {
  //     response = null;
  //     // error
  //     console.log(ex);
  //     reject(ex);
  //   }
  //   if (response) {
  //     // success
  //     resolve(response.data);
  //   }
  // })
  // await coin.then((items)=>{
  //   coinJson = items;
  //   res.locals.coinPrice = items;
  // });
  // let coin = await rp({
  //   method: 'GET',
  //   uri: 'http://api.coinlayer.com/api/live?access_key=bfc68ced6ca91b541188a181b04dc3f9',
  //   json: true,
  //   "rejectUnauthorized": false
  // });
  // // res.send(coin);
  // res.locals.coinPrice =  Object.entries(coin.rates).sort((a,b) =>b[1]-a[1]);

  next();
}