function fetchData(Data, callback){
    setTimeout(() => {
        console.log("fetchData worked");
        callback(data);
    }
}

function processData(data) {
  console.log("Processing ${data}...");
}

function errorHandler(data) {
  console.log("Error fetching ${data}...");
}

fetchData("users", (data) => {
  processData(data);
 }