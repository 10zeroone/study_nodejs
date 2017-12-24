var express = require('express');
var router = express.Router();

// TODO 1: JSON 추가
var sensors = [{
	"type" : "thermometer",
	"id" : "termometer1",
	"switch" : "off"
},
{
	"type" : "thermometer",
	"id" : "termometer2",
	"switch" : "on" 
}];


/* GET home page. */
// 홈페이지가 열리는 부분 설정
// 브라우저나 개방형 API를 쓰는 애플리케이션에서 URL을 주면 핸들러로 넘어가는데, 이것을 설정
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});


// TODO 2: CRUD OPEN API 추가
// router.get(요청경로, 수행함수)함수는 GET method를 route하는 함수입니다. 
router.get('/api/sensors', function (req, res, next) {
	res.writeHead(200, {"Content-Type" : " application/Json"});
	res.end(JSON.stringify(sensors));
});

// console.log를 통해서, 각각의 센서 객체를 개별적으로 불러들일 수 있으며, 
// 센서 아이디가 설정되지 않은 경우에는 404 에러 메시지를 출력하도록 설정되어 있습니다.
router.get('/api/sensors/:id', function (req, res) {
	try {
		var id = req.params.id;
		console.log('ID:', req.params.id)
		var sensorObj = sensors[id];
		
		if(sensorObj == null) {
			throw new Error('404');
		}
		res.writeHead(200, { 'Content-Type' : "application/Json"});
		// JSON.stringify()json 객체를 String 객체로 변환시켜 줍니다.
		res.end(JSON.stringify(sensors[id]));
	} catch (err) {
		res.sendStatus(err.message);
	}
});

// router.post는 객체를 생성
// accept POST request at / api / sensors / : id
router.post('/api/sensors/:id', function (req, res) {
	// res.send() : Postman 애플리케이션에서 해당 메소드를 선택한 후 Send 버튼을 클릭할 때 나오는 메시지를 설정하고 있습니다.
	res.send('Got a POST request');
});

// router.put은 객체 갱신
// accept PUT request at / api / sensors / : id
router.put('/api/sensors/:id', function (req, res) {
	res.send('Got a PUT request at /api/sensors/ : id');
});
//PUT api/sensors/ :id

// router.delete는 객체 삭제
// accept DELETE request at / api / sensors / : id
router.delete('/api/sensors/:id', function (req, res) {
	res.send('Got a DELETE request at /api/sensors/ :id');
});




module.exports = router;
