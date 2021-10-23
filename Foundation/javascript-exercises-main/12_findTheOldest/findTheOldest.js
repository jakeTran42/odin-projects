const findTheOldest = function (objArr) {
  let currentOldestPerson = undefined;
  let currentObjAge = 0;
  let currentYear = 2022;

  for (let i = 0; i < objArr.length; i++) {
    currentObjAge =
      (objArr[i].yearOfDeath ? objArr[i].yearOfDeath : currentYear) -
      objArr[i].yearOfBirth;

    if (currentOldestPerson == undefined) {
      currentOldestPerson = { ...objArr[i], age: currentObjAge };
    } else {
      if (currentOldestPerson.age < currentObjAge) {
        currentOldestPerson = { ...objArr[i], age: currentObjAge };
      }
    }
  }

  return currentOldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
