/**
 * querystring 모듈
 */




var url = require("url");
var querystring = require("querystring");

//파싱한 결과 저장
var temUrl = url.parse("https://www.google.co.kr/search?dcr=0&ei=D8L4We-dLYS28QWx2KrQDw&q=node&oq=node&gs_l=psy-ab.3..0i131k1j0l3j0i131k1j0l5.5933.6262.0.6509.3.3.0.0.0.0.164.456.0j3.3.0....0...1.1.64.psy-ab..0.3.453....0.JCQbd8012xg");


// 파싱한 결과 저장
var temPar = querystring.parse(temUrl.query);

// 정보를 속성으로 출력
console.log("temPar.dcr : " + temPar.dcr);
console.log("temPar.ei : " + temPar.ei);
console.log("temPar.q : " + temPar.q);

console.log("querystring.stringify(temPar) : " + querystring.stringify(temPar));


//temPar.dcr : 0
//temPar.ei : D8L4We-dLYS28QWx2KrQDw
//temPar.q : node
//querystring.stringify(temPar) : dcr=0&ei=D8L4We-dLYS28QWx2KrQDw&q=node&oq=node&gs_l=psy-ab.3..0i131k1j0l3j0i131k1j0l5.5933.6262.0.6509.3.3.0.0.0.0.164.456.0j3.3.0....0...1.1.64.psy-ab..0.3.453....0.JCQbd8012xg
