# 2024inpy

## 수행평가 제출 안내 ( 과제 확인 )  

https://classroom.google.com/c/NjU5NDI4MTc1NTMy?cjc=3x73dxp

## 학습 교안 

1차시 개발환경 준비 

https://m.blog.naver.com/icbanq/222869451063

2차시 아두이노 -> p5.js 로 데이터 전송 

https://m.blog.naver.com/icbanq/222874162899

3차시 p5.js -> 아두이노로 데이터 전송 

https://m.blog.naver.com/icbanq/222879638877

* LCD에서 글자가 나오지 않는 경우
1. 저항값 조절 ( 뒤에 드라이버로 나사 풀기 )
2. 시작 주소 위치 변경
     1) LiquidCrystal_I2C lcd(0x20,16,2);
     2) LiquidCrystal_I2C lcd(0x27,16,2);
     3) LiquidCrystal_I2C lcd(0x3F,16,2); 


4차시 양방향 통신 

https://m.blog.naver.com/icbanq/222886529322
