const getImgStyles = (num: number, size: string) => {
  if (size === "medium") {
    switch (num) {
      case 1:
        return `
          width: 480px;
          height: 270px;
          top: 10px;
          right: -10px;
        `;
      case 2:
        return `
          width: 520px;
          height: 280px;
          top: 10px;
          left: 0;
        `;
      case 3_1:
        return `
          width: 450px;
          height: 270px;
          right: 15px;
        `;
      case 3_2:
        return `
          height: 120px;
          left: 0;
          bottom: 60px;
        `;
    };
  } else {
    switch (num) {
      case 1:
        return `
          width: 350px;
          height: 230px;
          top: 0;
          right: -25px;
        `;
      case 2:
        return `
          width: 370px;
          height: 240px;
          top: 0;
          left: -35px;
        `;
      case 3_1:
        return `
          width: 330px;
          height: 200px;
          right: 0;
        `;
      case 3_2:
        return `
          display: none;
        `;
    };
  }
};

const getTextAreaStyles = (num: number, size: string) => {
  if (size === "medium") {
    switch (num) {
      case 1:
        return `
          top: 270px;
          left: 20px;
        `;
      case 2:
        return `
          top: 275px;
          right: 25px;
        `;
      case 3:
        return `
          top: 45px;
          left: 20px;
        `;
    };
  } else {
    switch (num) {
      case 1:
        return `
          top: 235px;
          left: 10px;
        `;
      case 2:
        return `
          top: 235px;
          right: 15px;
        `;
      case 3:
        return `
          top: 30px;
        `;
    };
  }
};

const getMainTextStyles = (num: number, size: string) => {
  if (size === "medium") {
    switch (num) {
      case 1:
      case 2:
      case 3:
        return `
          font-size: 26px;
        `;
    };
  } else {
    switch (num) {
      case 1:
      case 2:
      case 3:
        return `
          font-size: 23px;
        `;
    };
  }
};

const getSubTextStyles = (num: number, size: string) => {
  if (size === "medium") {
    switch (num) {
      case 1:
      case 2:
        return `
          font-size: 14px;
        `;
      case 3:
        return `
          font-size: 14px;
          max-width: 280px;
        `;
    };
  } else {
    switch (num) {
      case 1:
      case 2:
      case 3:
        return `
          font-size: 12px;
        `;
    };
  }
};

export { getImgStyles, getTextAreaStyles, getMainTextStyles, getSubTextStyles }