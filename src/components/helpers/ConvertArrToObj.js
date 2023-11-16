const convertData = (data, type) => {
  const arrToObj = data[type].map((item) => {
    return {
      data: item[0],
      [type]: item[1],
    };
  });
  return arrToObj;
};

export { convertData };
