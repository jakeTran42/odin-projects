const getTheTitles = function (objArr) {
  let titleArr = [];

  for (let i = 0; i < objArr.length; i++) {
    titleArr.push(objArr[i].title);
  }

  return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
