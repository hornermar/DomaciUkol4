import { generateEmployeeData } from "./generateEmployeeData.js";
import { getEmployeeStatistics } from "./getEmployeeStatistics.js";

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

function main(dtoIn) {
    if (!isInputDataValid(dtoIn)) return "Invalid input data";

    const employeeData = generateEmployeeData(dtoIn);
    const dtoOut = getEmployeeStatistics(employeeData);

    return dtoOut;
}

const dtoIn = {
    count: "6",
    age: {
        min: 28,
        max: 31,
    },
};

console.log(main(dtoIn));
