function keyboardShortcuts(event) {
  const { key } = event;
  switch(key) {
    case '<':                                   // Listen for keyboard events
     try{                                       // Delete secret div when pressing "<"
  var divhack = document.querySelectorAll(".magic")[0];
      divhack.innerHTML = "";
  }
  catch(err) {
    //console.log("not found");
  }
      break;
  }
}
document.addEventListener('keyup', keyboardShortcuts);



  var head = document.querySelectorAll("head")[0];
  head.innerHTML += "<style>.magic::-webkit-scrollbar {display: none;}</style>";  // hide scrollbar in the secret div

document.onclick = globalOnClickHandler;

function extractContent(html){
  // Create a new div element
  var tempdiv = document.createElement("div");
  // Set the HTML content with the providen
  tempdiv.innerHTML = html;                       //from the external source extract <p>
  var plist = tempdiv.querySelectorAll("p");
  var data = document.createElement("div");
  for(i = 0; i < plist.length ; i++){

          data.innerText += plist[i].innerText;
      }
      //console.log(data);
      return data;
}

function httpGet(theUrl){
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
xmlHttp.send( null );
return xmlHttp.responseText;
}

warn = document.getElementById("quiznojswarning");
warn.innerHTML = "";                                    //Delete no js warning

div = document.querySelectorAll(".othernav")[0];
divcontent = div.innerHTML;                             //Create the Secret div
div.innerHTML += "<div style='overflow-y:scroll; height:175px' class='magic'></div>";

function globalOnClickHandler() {
    var s = window.getSelection();
    s.modify('move','backward','word');
    s.modify('extend','forward','word');
    var query = s.toString();                          //get one word of a wide <p>
    query = query.replace(" ","");                    // Delete axtra spacing
    query = query.replace(" ","");
    data = httpGet("https://www.example.com/chimicadb.php?key=key&args="+query);  // Request to remote db you can also use some internet search api

      var data = JSON.parse(data);      //parse Json
      var url = data["Url"];          //get Url

            data = httpGet("https://cors-anywhere.herokuapp.com/"+url);  // exploit cross origin limit
            data = extractContent(data);    //parse html
            div = document.querySelectorAll(".magic")[0];  // replace secret div content with new
            div.innerHTML = "<p class='dontlookatme' style='font-size:10px !important;'>"+data.innerText+"</p>";
}
