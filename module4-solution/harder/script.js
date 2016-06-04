(function (window){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var nm in names) {
    var firstLetter = names[nm].charAt(0).toLowerCase();
    //console.log(names[nm]+ "  " +firstLetter);
    if (firstLetter ==='j') {
       byeSpeaker.speak(names[nm]);
    } else {
       helloSpeaker.speak(names[nm]);
    }
  }
})(window);

