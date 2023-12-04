export default function getPageArray(page: number, totalPage: number) {
  const pages: number[] = [];
  
  // 페이지 그룹의 시작 페이지 계산
  const startPage = Math.floor((page - 1) / 5) * 5 + 1;

  // 시작 페이지부터 시작해서 totalPage까지 배열에 추가
  for (let i = startPage; i <= totalPage && i < startPage + 5; i++) {
    pages.push(i);
  };

  return pages;
}