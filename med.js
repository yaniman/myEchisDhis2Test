exports.sendData = (req, res) => {
  var request = require("request");
  request("http://localhost:3003", function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var importedJSON = JSON.parse(body);
      var myJs = importedJSON.output.data;
      //return res.json(importedJSON.output.data[0]["fp_new_at_10_to_14"]);
      for (var x = 0; x <myJs.length; x++) {
        return res.json(
          valuechecker(
            "fp_new_at_10_to_14",
            2,
            importedJSON.output.data,
            "Bili Health Post"
          )
        );
      }

    }
  });
};

parseJsondata = (x,totalD, myJsonFile) => {
  var finalValue = {};
  var nethods=["implants","injectables","iucd","oral-contraceptives","others"];
  
    var myNewAgevalue0 = {
      "10-14": valuechecker(
        "fp_new_at_10_to_14",
        totalD,
        myJsonFile,
        myJsonFile[x][health_post]
      ),
    };
    var myNewAgevalue1 = {
      "15-19": valuechecker(
        "fp_new_at_15_to_19",
        totalD,
        myJsonFile,
        myJsonFile[x][health_post]
      ),
    };
    var myNewAgevalue2 = {
      "20-24": valuechecker(
        "fp_new_at_20_to_24",
        totalD,
        myJsonFile,
        myJsonFile[x][health_post]
      ),
    };
    var myNewAgevalue3 = {
      "25-29": valuechecker(
        "fp_new_at_25_to_29",
        totalD,
        myJsonFile,
        myJsonFile[x][health_post]
      ),
    };
    var myNewAgevalue4 = {
      "30-49": valuechecker(
        "fp_new_at_30_to_49",
        totalD,
        myJsonFile,
        myJsonFile[x][health_post]
      ),
    };
    var myNewmethod = [
      valuechecker(
        "fp_new_implants",
        totalD,
        myJsonFile,
        myJsonFile[x][health_post]
      ),
      valuechecker(
        "fp_new_injectables",
        totalD,
        myJsonFile,
        myJsonFile[x][health_post]
      ),
      valuechecker(
        "fp_new_iucd",
        totalD,
        myJsonFile,
        myJsonFile[x][health_post]
      ),
      valuechecker(
        "fp_new_oral_contraceptives",
        totalD,
        myJsonFile,
        myJsonFile[x][health_post]
      ),
      valuechecker(
        "fp_new_others",
        totalD,
        myJsonFile,
        myJsonFile[x][health_post]
      ),
    ];
      
    
    
  
  //create a loop that parses the array of elements
};
valuechecker = (data, totalD, jsonData, healthPost) => {
  var val = jsonData[0][data];
  for (var x = 0; x < totalD; x++) {
    for (var i = 0; i < totalD; i++) {
      if (jsonData[x][healthPost] == jsonData[i][healthPost]) {
        val = val + jsonData[i][data];
      }
    }
  }
  return val;
};
