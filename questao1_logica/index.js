const Navigation = {
    NORTE: "N",
    SUL: "S",
    LESTE: "L",
    OESTE: "O"
}

const divideMeasurement = (measurement) => {
    const measurementArray = measurement.split(" ");

    return {
        width: measurementArray[0],
        height: measurementArray[1]
    }
}

const separateCases = (dataArray) => {
    const cases = [];

    for(let i = 0; i < dataArray.length; i++){
        if(dataArray[i] !== undefined && dataArray[i].trim() !== "" && dataArray !== undefined && dataArray[i+1].trim() !== "" ){
            cases.push({
                measurement: divideMeasurement(dataArray[i]),
                test: dataArray[i+1]
            })
        }

        i++;
    }

    return cases;
}

const goThroughCases = (data) => {
    const cases = separateCases(data)
    const saida = [];
    console.log('\nProcessando movimentos...\n')
    cases.map((testCase)=> {
        let currentLocation = {x: 0, y: 0, orientation: Navigation.NORTE}
        const testCommandsArray = testCase.test.split("");

        testCommandsArray.map((testCommand, index) => {
            currentLocation = exploreInDirection(testCommand, testCase.measurement, currentLocation);

            if(index == testCommandsArray.length - 1)
                saida.push(currentLocation);
        })
    });
    return saida;
}

const exploreInDirection = (command, measurement, current) => {
    if(command == "F" || command == "T")
        return move(command, measurement, current)

    if(command == "D" || command == "E")
        return rotate90(command, current)
}

const move =  (command, measurement, current) => {
    let xMoviment = current.x;
    let yMoviment = current.y;

    if(current.orientation == Navigation.NORTE)
         (command == "F")? yMoviment += 1 : yMoviment -= 1;

    else if(current.orientation == Navigation.SUL)
         (command == "F")? yMoviment -= 1 : yMoviment += 1;

    else if(current.orientation == Navigation.LESTE)
         (command == "F")? xMoviment += 1 : xMoviment -= 1;

    else if(current.orientation == Navigation.OESTE)
         (command == "F")? xMoviment -= 1 : xMoviment += 1;

    if(xMoviment > measurement.width || xMoviment < 0 || yMoviment > measurement.height || yMoviment < 0)
        return current

    return {x: xMoviment, y: yMoviment, orientation: current.orientation};
}

const rotate90 = (command, current) => {
    const compass = [
        Navigation.NORTE, 
        Navigation.LESTE, 
        Navigation.SUL, 
        Navigation.OESTE];

    const indexOrientation = compass.indexOf(current.orientation);
    let indexNewOrientation = 0;

    if(command == "D"){
        indexNewOrientation = (indexOrientation + 1 > (compass.length - 1))? 0 : indexOrientation + 1
    }
    if(command == "E" ){
        indexNewOrientation = (indexOrientation - 1  < 0)? compass.length - 1 : indexOrientation - 1
    }

    return {x: current.x, y: current.y, orientation: compass[indexNewOrientation]}
}

const structureExitFile = (results) => {
    return results.map((result)=> {
        return `${result.orientation} ${result.x} ${result.y}`;
    })
}

const writeResultFile = (testResults) => {
    console.log('\nResultado de saída realizado com sucesso. [Confira o arquivo saida.txt]\n')
    const testResultsForFile = testResults.join("\n");
    fs.writeFileSync("saida.txt", testResultsForFile);
}

const fs = require("fs");
const data = fs.readFileSync("entrada.txt", "utf8").split("\n").map((line) => line.replace("\r", ""));
console.log("\nArquivo entrada.txt lido com sucesso.\n")

const testResults = structureExitFile(goThroughCases(data));
writeResultFile(testResults);

