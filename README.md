nest 키워드 입력 시, 에러가 발생한다면
npx @nextjs/cli 를 입력하고 키워드를 치자!

/:id 와 :id의 차이는 아래와 같다.
/(슬래시)를 사용하면 해당 엔드포인트는 절대 경로로 취급이 된다.
넣지 않는다면 상대 경로로 취급이 된다.

예를 들어, 루트 경로 http://localhost:3000/에서 @Delete('/:id')를 사용하는 경우, 엔드포인트는 http://localhost:3000/:id가 됩니다. 반면에, @Delete(':id')를 사용하는 경우 현재 요청 경로가 http://localhost:3000/users인 경우, 엔드포인트는 http://localhost:3000/users/:id가 됩니다.

상대경로로 사용하는 게 보편적으로 사용하는 API 명세서와 동일할 것 같다.
