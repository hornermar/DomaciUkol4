import {
 felameSurnamesList,
 femaleNamesList,
 maleNamesList,
 maleSurnameList,
} from "./names.js";

function getRandomItemFromArray(array) {
 return array[Math.floor(Math.random() * array.length)];
}

function getRandomBirthdate(minAge, maxAge) {
 const toDate = new Date();
 toDate.setFullYear(toDate.getFullYear() - minAge);

 const fromDate = new Date();
 fromDate.setFullYear(fromDate.getFullYear() - maxAge - 1);
 fromDate.setDate(fromDate.getDate() + 1);

 return new Date(
  fromDate.getTime() + Math.random() * (toDate.getTime() - fromDate.getTime())
 ).toISOString();
}

function isInputDataValid(data) {
 if (data.count < 1 || !Number(data.count)) return false;
 if (
  data.age.min > data.age.max ||
  !Number(data.age.min) ||
  !Number(data.age.max)
 )
  return false;

 return true;
}

const genderList = ["male", "female"];
const workloadList = [10, 20, 30, 40];

function main(dtoIn) {
 if (!isInputDataValid(dtoIn)) return "Invalid input data";

 let dtoOut = [];

 for (let i = 0; i < dtoIn.count; i++) {
  const gender = getRandomItemFromArray(genderList);

  dtoOut.push({
   gender: gender,
   birthdate: getRandomBirthdate(dtoIn.age.min, dtoIn.age.max),
   name:
    gender === "female"
     ? getRandomItemFromArray(femaleNamesList)
     : getRandomItemFromArray(maleNamesList),
   surname:
    gender === "female"
     ? getRandomItemFromArray(felameSurnamesList)
     : getRandomItemFromArray(maleSurnameList),
   workload: getRandomItemFromArray(workloadList),
  });
 }

 return dtoOut;
}

const dtoIn = {
 count: "2",
 age: {
  min: 28,
  max: 31,
 },
};

console.log(main(dtoIn));
