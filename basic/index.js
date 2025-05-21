const port = 8000;

const express = require("express"); //express 모듈 호출
const cors = require("cors"); //cors 모듈 호출
const database = require("./database/database");

const app = express(); //express 인스턴스 생성

//미들웨어 설정
app.use(express.json()); //json 파싱
app.use(cors()); //교차 출처 데이터 공유 허용



//라우터 설정
app.get("/", (req, res) => {
  //파라미터를 사용하지 않더라도 순서에 맞춰 적는다.
  res.send("Test4364"); //브라우저에 표시되는 메세지
});

app.get("/getItems", async(req, res)=>{
  try {
    //db 쿼리 실행 및 저장
    const result = await database.pool.query("SELECT * FROM revenue")
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error Occured while getting items " + error.message,
    });
  }

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
