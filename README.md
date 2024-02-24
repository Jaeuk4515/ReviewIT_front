# 리뷰잇(Review IT) : IT 기기 리뷰 커뮤니티

## 프로젝트 소개
현대 생활에 필수적인 IT 기기들의 사용, 구매 리뷰를 찾아보고 자신의 리뷰를 작성할 수 있는 IT 리뷰 사이트<br>

<img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/0f7e5525-96fd-4416-b050-d52fd5601db4" /><br>

- 개인 프로젝트
- 사용 기술
  - FE : React.js, styled-components, TypeScript
  - BE : Node.js, Express.js, MongoDB
  - infra : Vercel(FE), Google Cloud Platform(BE)
  
<br>

사이트 링크 : https://review-it-tawny.vercel.app/

## 기능 구현 리스트
<details>
  <summary>1. 헤더</summary>
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/dfe1a170-cec3-4ba1-b765-bd2e4e363cf4" />
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/554c6d93-77e8-4b1a-976a-2972eb807567" />

  #### 로그인/회원가입
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/e3f182c0-eb52-489f-af23-dfd535abae9d" />
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/1a43fb18-88b6-4013-843f-d4f7be9103fd" />

  #### 화이트모드/다크모드 전환
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/44640863-2a70-42d6-8562-a47d57f1e1f7" />
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/9db295d9-4932-4d76-95f2-990a2ee3b020" />
  헤더의 모드 전환 버튼을 눌러 화이트모드 or 다크모드 변환 가능  
</details>

<details>
  <summary>2. 홈 페이지</summary>
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/4ccfa18a-b430-4e2f-9bba-74f3058b7616" />
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/ba9ef928-9257-41a6-9412-567d8794886e" />
  
  #### 리뷰
  - 리뷰 페이지로 이동하는 "전체 리뷰" 버튼과 사이트에 존재하는 리뷰 제품의 카테고리 네비게이션 바
  - 카테고리 버튼을 클릭하면 해당 카테고리가 선택된 리뷰 페이지로 이동
  - 좌/우 버튼을 클릭해 카데고리 네비게이션 바 이동 가능
    
  #### 베스트 리뷰
  - 좋아요 수 상위 20개의 리뷰
  - 좌/우 버튼을 클릭해 이동 가능한 가로 슬라이드
  - 슬라이드 내의 썸네일(리뷰 정보) 클릭 시 해당 리뷰 상세 페이지로 이동

  #### 추천 비추천
  - 추천 : 별점이 5점인 리뷰
  - 비추천 : 별점이 1점인 리뷰
  - 클릭시 추천 리뷰 페이지/비추천 리뷰 페이지로 이동
</details>

<details>
  <summary>3. 리뷰 페이지</summary>
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/62b51cd1-90df-4c71-805b-9f8022242377" />
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/67c7ad2b-98c8-4e00-ad2e-299f84b170f7" />
  <br>

  #### 리뷰 검색
  - 원하는 키워드로 리뷰 검색
  - 검색창의 x 버튼을 클릭하거나 검색어를 지우고 검색 시 다시 전체 리뷰로 전환
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/69fc0fd4-62cd-406f-b7e3-238e74406da0" />
    
  #### 카테고리별 분류
  - 카테고리 버튼 클릭 시 해당 카테고리 제품의 리뷰들로 필터링
  - 카테고리 버튼이 클릭된 상태에서 다시 클릭 시 필터링 해제되는 토글 형식
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/f50998f3-ff24-44ac-b581-f36be91567a9" />
  
  <br>
  
  - 리뷰 클릭 시 해당 리뷰 상세 페이지로 이동
</details>

<details>
  <summary>4. 리뷰 상세 페이지</summary>
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/3a07c00b-de0f-43ad-87bc-939d1627155e" />
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/190dd94d-ae29-41a6-b174-2796c534d1ce" /><br>

  #### 리뷰 제품 정보
  - "제품 보러 가기" 클릭 시 작성자가 지정한 해당 제품의 판매 페이지(쿠팡 등)로 이동
  - 리뷰 제품의 사진 확인 가능
  - 사진 클릭 시 사진 슬라이드 확대
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/88754b03-2201-434b-9d4b-4b0c70636a7c" />

  #### 좋아요
  - 좋아요를 누르면 좋아요 버튼의 하트 아이콘이 빨간색으로 변경
  - 이미 좋아요를 누른 리뷰면 하트 아이콘이 빨간색으로 나타남
  - 좋아요 버튼을 다시 눌러 좋아요 취소 가능. 하트 아이콘은 다시 회색으로 변경
  - 로그인 상태가 아니면 좋아요 불가능
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/02ecbcbb-f6a7-4f86-8855-164da781db29" />

  #### 댓글
  - 로그인 상태가 아니면 댓글 불가능
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/5db0d802-1794-41e2-9d30-ed3b135ed95b" />
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/81b1ebec-b323-4c44-b50c-54e3a8878c96" />

  <br>
  
  - 본인이 쓴 댓글은 휴지통 아이콘을 클릭하여 댓글 삭제 가능
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/16b99524-aca1-45dd-9305-9dcc4c9e4be8" />

  <br>

  - 본인이 쓴 리뷰는 수정/삭제 가능
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/2f2ddf92-9aca-45e4-bedf-0327995a80ff" />
  
</details>

<details>
  <summary>5. 리뷰 작성 페이지</summary>
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/5d7f6971-2d1f-4f6f-961d-5486e3b916b7" />
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/46fd3939-82fb-45ba-8b01-46543a515353" />

  #### 카테고리 선택
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/cbdac3f1-55a7-4d3e-a026-8f38e37bde6f" /><br>
  - 리뷰 제품의 카테고리를 지정

  #### 별점 선택
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/b21cc538-a594-4f12-9571-12786afb5982" /><br>
  - n번째 별모양 아이콘을 클릭하여 별점 n점 부여

  #### 이미지 업로드
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/38859f57-6c10-4de5-a75e-333d9649b112" /><br>
  - 최대 4개의 이미지 업로드 및 업로드한 이미지 미리보기
  - 미리보기 이미지 우측 상단의 X 버튼을 눌러 업로드 취소 가능
  - 기존에 업로드한 이미지를 유지한채 다시 이미지 업로드 가능
  
</details>

<details>
  <summary>6. 리뷰 수정 페이지</summary>
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/42962093-8c63-46a9-a70d-152461327968" />
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/09837bb9-07fb-4873-819e-c646d5d96f43" /><br>
  
  - 작성했던 리뷰의 내용이 채워져있는 수정 페이지
  - 원하는대로 내용 수정 가능
  
</details>

<details>
  <summary>7. 강추/비추 페이지</summary>
  
  #### 강추
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/b222fbcd-f030-4ec4-bb0f-eccd1443dfdd" />
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/04bf8115-a2d0-4124-b4a5-ff781eb0b88a" />

  #### 비추
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/d69dcf32-98d9-48cd-bb7a-6d7eeba28391" />
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/c7024f39-0d8e-4884-9618-0870ffbe0784" />
</details>

<details>
  <summary>8. 마이페이지</summary>
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/de37688f-91ce-4294-937f-f10bcd0f84e4" />
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/9eb136b8-5d41-4bf4-b60a-2ab6c5922e21" />

  #### 프로필 수정
  - 프로필 이미지 변경 or 초기화
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/2b3d0d32-fa6d-4bba-a093-90dbdd19636d" />
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/2eca637f-c19c-4ce3-9abb-9273339aa6d2" /><br>

  - 닉네임 변경

  #### 나의 활동 확인
  - 내가 쓴 리뷰
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/d7ffb8ae-48d4-49c0-a9fc-d1589f8ced7e" /><br>
  
  - 좋아요 한 리뷰
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/197e5262-237f-47ff-a581-0304f97ecb4a" /><br>
  
  - 내가 쓴 댓글
  <img src="https://github.com/Jaeuk4515/ReviewIT_front/assets/112686037/19af9b0c-b5eb-4ee3-bca8-cfccdf314b1a" /><br>

  리뷰나 댓글 클릭시 해당 리뷰 페이지로 이동
  
</details>
