var result;
function setup() {
  result = select('#result');
}

function isLetter(str){
 return str.length == 1 && ('a' <= str && str <= 'z' || 'A' <= str && str <= 'Z' || str === 'é' || str === 'è' || str === 'à' || str === 'ç');
}

function testSpellBackward(){
  console.log(spellBackwards("hello world"));
  console.log(spellBackwards("olleh dlrow 12345 khbsv what"));
  console.log(spellBackwards("Bonjour tout le monde"));
  console.log(spellBackwards("A B C D"));
  console.log(spellBackwards("Bonjour tout le monde")); 
}
function spellBackward(text){
  var result = "";
  var i = 0, p = 0;
  
  for(;i < text.length; i++){
    if (!isLetter(text[i])){
      for(var k = i - 1; k >= p; k--){
        result += text[k];
      }
      result += text[i]
      p = i + 1;
    }
  }
  if (p < i)
  for(var k = i - 1; k >= p; k--){
    result += text[k];
  }
  
  return result;
}

function updateResult(){
  //txt = select('#textArea');
  txt = document.getElementById("textArea").value;
  result.html(spellBackward(txt))
}