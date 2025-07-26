const textInput= document.getElementById("text-input");
const checkBtn=document.getElementById("check-btn");
const resultDiv=document.getElementById("result");

function checkPalindrome(str){
  const cleanString = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const reverseString = cleanString.split("").reverse().join("");
  return cleanString === reverseString;
}


function checkInput(){
const inputValue = textInput.value;

if(inputValue===""){
  alert("Please input a value");
  resultDiv.textContent = "";
  return;
};

if (checkPalindrome(inputValue)){
    resultDiv.textContent = `${inputValue} is a Palindrome!`
  }
  else{
    resultDiv.textContent = `${inputValue} is not a Palindrome.`
  }
  };

checkBtn.addEventListener("click",checkInput);

checkBtn.addEventListener("click", checkPalindrome);
