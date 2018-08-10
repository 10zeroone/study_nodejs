/**
 * url 모듈
 */
var url = require("url");


// 파싱한 결과 저장
// node를 키워드로 구글 검색한 URL입니다.
var temUrl = url.parse("https://www.google.co.kr/search?dcr=0&ei=D8L4We-dLYS28QWx2KrQDw&q=node&oq=node&gs_l=psy-ab.3..0i131k1j0l3j0i131k1j0l5.5933.6262.0.6509.3.3.0.0.0.0.164.456.0j3.3.0....0...1.1.64.psy-ab..0.3.453....0.JCQbd8012xg");

console.log("temUrl : " + temUrl);
console.log("temUrl.hostname : " + temUrl.hostname);
console.log("temUrl.port : " + temUrl.port);
console.log("temUrl.pathname : " + temUrl.pathname);
console.log("temUrl.protocol : " + temUrl.protocol);



var temStr = url.format(temUrl);
console.log("temStr : " + temStr);


//temUrl : [object Object]
//temUrl.hostname : www.google.co.kr
//temUrl.port : null
//temUrl.pathname : /search
//temUrl.protocol : https:
//temStr : https://www.google.co.kr/search?dcr=0&ei=D8L4We-dLYS28QWx2KrQDw&q=node&oq=node&gs_l=psy-ab.3..0i131k1j0l3j0i131k1j0l5.5933.6262.0.6509.3.3.0.0.0.0.164.456.0j3.3.0....0...1.1.64.psy-ab..0.3.453....0.JCQbd8012xg
