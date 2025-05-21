const port = 8000;
const express = require("express"); //express 모듈 호출
const cors = require("cors"); //cors 모듈 호출


const app = express(); //express 인스턴스 생성

//미들웨어 설정
app.use(express.json()); //json 파싱
app.use(cors()); //교차 출처 데이터 공유 허용


//라우터 설정
app.get("/", (req, res) => {
  //파라미터를 사용하지 않더라도 순서에 맞춰 적는다.
  res.send("Hello Node, This is Root"); //브라우저에 표시되는 메세지
});

app.use(require("./routes/getRoutes"));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
