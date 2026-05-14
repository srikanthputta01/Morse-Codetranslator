const morseCode ={
    "A": ".-","B": "-...","C": "-.-.","D": "-..","E": ".",
   "F": "..-.","G": "--.","H": "....", "I": "..","J": ".---","K": "-.-",
   "L": ".-..","M": "--","N": "-.","O": "---","P": ".--.","Q": "--.-","R": ".-.",
   "S": "...","T": "-","U": "..-","V":"...-","W": ".--","X": "-..-",
   "Y": "-.--","Z": "--..",
   '0':"-----",'1' : ".----",'2' : "..---",'3' : "...--",'4' : "....-",
'5'	: ".....",'6' : "-....",'7' : "--...",'8' : "---..",'9'	: "----.",
'.' : ".-.-.-",',' : "--..--",'?' :	"..--..",'!': "-.-.--","/"	: "-..-.",
'@' : ".--.-.",'(' : "-.--.",')' : "-.--.-",'+' : ".-.-.",'-' : "-....-",'&' :".-...",
'=' : "-...-",'"' : ".-..-."," ' " : ".----.", ':': "---...",';' :"-.-.-.",'$' :"...-..-",
"_":"..--.-",

};
function texttoMorse(){
    const inputtext=document.getElementById("inputtext").value.toUpperCase();
    let morseOutput="";
    for(let i = 0;i < inputtext.length;i++){
        const char = inputtext[i];
        if(morseCode[char]){
            morseOutput += morseCode[char] + " ";
        }else{
            morseOutput += " ";
        }
        }
        document.getElementById("output").textContent = morseOutput;
    }
    function morsetotext() {
           const inputMorse = document.getElementById("inputtext").value;
           const morseArray=inputMorse.split(" ");
           let textOutput = "";
           for(let i=0;i < morseArray.length;i++){
            for(const [key, value] of Object.entries(morseCode)){
                if(value === morseArray[i]){
                    textOutput += key;
                }
            }
           }
           document.getElementById("output").textContent = textOutput;
    }