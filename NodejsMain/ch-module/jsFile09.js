/**
 * http://usejsdoc.org/
 */

var url = require("url");
var querystring = require("querystring");

var temUrl = url.parse("https://www.google.co.kr/search?dcr=0&ei=D8L4We-dLYS28QWx2KrQDw&q=node&oq=node&gs_l=psy-ab.3..0i131k1j0l3j0i131k1j0l5.5933.6262.0.6509.3.3.0.0.0.0.164.456.0j3.3.0....0...1.1.64.psy-ab..0.3.453....0.JCQbd8012xg");
var temStr = url.format(temUrl);

console.log("temUrl : " + temUrl);
console.log("temStr : " + temStr);

var temPar = querystring.parse(temUrl.query);
console.log("temPar.dcr : " + temPar.dcr);
console.log("temPar.ei : " + temPar.ei);
console.log("temPar.q : " + temPar.q);

console.log("querystring.stringify(temPar) : " + querystring.stringify(temPar));