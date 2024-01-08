const getImageStyle = (num: number) => {
  switch (num) {
    case 0:
      return `
        &:nth-child(1) {
          left: 0;
          transition: 0.3s;
          z-index: 4;
        }
        &:nth-child(2) {
          left: 30px;
          transition: 0.3s;
          z-index: 3;
          transform: scale(0.94);
        }
        &:nth-child(3) {
          left: 55px;
          transition: 0.3s;
          z-index: 2;
          transform: scale(0.88);
        }
        &:nth-child(4) {
          left: 75px;
          transition: 0.3s;
          z-index: 1;
          transform: scale(0.82);
        }
      `
    case 1:
      return `
        &:nth-child(1) {
          left: -30px;
          transition: 0.3s;
          z-index: 2;
          transform: scale(0.94);
        }
        &:nth-child(2) {
          left: 0;
          transition: 0.3s;
          z-index: 3;
        }
        &:nth-child(3) {
          left: 30px;
          transition: 0.3s;
          z-index: 2;
          transform: scale(0.94);
        }
        &:nth-child(4) {
          left: 55px;
          transition: 0.3s;
          z-index: 1;
          transform: scale(0.88);
        }
      `
    case 2:
      return `
        &:nth-child(1) {
          left: -55px;
          transition: 0.3s;
          z-index: 1;
          transform: scale(0.88);
        }
        &:nth-child(2) {
          left: -30px;
          transition: 0.3s;
          z-index: 2;
          transform: scale(0.94);
        }
        &:nth-child(3) {
          left: 0;
          transition: 0.3s;
          z-index: 3;
        }
        &:nth-child(4) {
          left: 30px;
          transition: 0.3s;
          z-index: 2;
          transform: scale(0.94);
        }
      `
    case 3:
      return `
        &:nth-child(1) {
          left: -75px;
          transition: 0.3s;
          z-index: 1;
          transform: scale(0.82);
        }
        &:nth-child(2) {
          left: -55px;
          transition: 0.3s;
          z-index: 2;
          transform: scale(0.88);
        }
        &:nth-child(3) {
          left: -30px;
          transition: 0.3s;
          z-index: 3;
          transform: scale(0.94);
        }
        &:nth-child(4) {
          left: 0;
          transition: 0.3s;
          z-index: 4;
        }
      `
  }
}

export { getImageStyle };