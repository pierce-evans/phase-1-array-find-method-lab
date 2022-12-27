// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]
function superbowlWin(array){
    let result = array.find(element => element.result === "W");
    console.log(result);
    if(result){
        return result.year
    }
    else{
        return result
    }
}
