let matem = {
  floor: (float) => {
    if (float > 0) {
      let qoldiq = ((float * 10) % 10) / 10;
      return float - qoldiq;
    } else {
      qoldiq = ((float * 10) % 10) / 10;
      return float - qoldiq + -1;
    }
  },
  ceil: (float) => {
    if (float > 0) {
      let qoldiq = ((float * 10) % 10) / 10;
      if (qoldiq == 0) {
        return float;
      }
      return float - qoldiq + 1;
    } else {
      qoldiq = ((float * 10) % 10) / 10;
      if (qoldiq == 0) {
        return float;
      }
      return float - qoldiq;
    }
  },
  round: (float) => {
    if (float > 0) {
      let qoldiq = ((float * 10) % 10) / 10;
      if (qoldiq >= 0.5) {
        return float - qoldiq + 1;
      } else if (qoldiq == 0) {
        return float;
      }
      return float - qoldiq;
    } else {
      qoldiq = ((float * 10) % 10) / 10;
      if (qoldiq <= -0.5) {
        return float - qoldiq + -1;
      } else if (qoldiq == 0) {
        return float;
      }
      return float - qoldiq;
    }
  },
};

console.log(matem.round(-12.7));
console.log(Math.round(-12.7));
