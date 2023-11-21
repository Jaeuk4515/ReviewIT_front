export default function getPageArray(pageCycle: number, totalPage: number) {
  const pages: number[] = [];
  const fullPageNumber = Math.floor(totalPage / 5);

  if (pageCycle <= fullPageNumber) {
    for (let i = 1; i <= 5; i++) {
      pages.push((pageCycle-1) * 5 + i);
    };
  } else {
    for (let i = 1; i <= totalPage % 5; i++) {
      pages.push((pageCycle-1) * 5 + i);
    }
  }

  return pages;
}