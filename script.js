const number = document.getElementById("number");
const convert = document.getElementById("convert-btn");
const output = document.getElementById("output");


  const romanConverter = (d,i) => {
if (i === 0){
  switch (d){
    case "0": return "";
    break;
    case "1": return "I";
    break;
    case "2": return "II";
    break;
    case "3": return "III";
    break;
    case "4": return "IV";
    break;
    case "5": return "V";
    break;
    case "6": return "VI";
    break;
    case "7": return "VII";
    break;
    case "8": return "VIII";
    break;
    case "9": return "IX";
    break;
  }
} else if (i === 1){
  switch (d){
    case "0": return "";
    break;
    case "1": return "X";
    break;
    case "2": return "XX";
    break;
    case "3": return "XXX";
    break;
    case "4": return "XL";
    break;
    case "5": return "L";
    break;
    case "6": return "LX";
    break;
    case "7": return "LXX";
    break;
    case "8": return "LXXX";
    break;
    case "9": return "XC";
    break;
  } 
} else if (i === 2){
  switch (d){
    case "0": return "";
    break;
    case "1": return "C";
    break;
    case "2": return "CC";
    break;
    case "3": return "CCC";
    break;
    case "4": return "CD";
    break;
    case "5": return "D";
    break;
    case "6": return "DC";
    break;
    case "7": return "DCC";
    break;
    case "8": return "DCCC";
    break;
    case "9": return "CM";
    break;
  } 
} else if (i === 3){
  switch (d){
    case "0": return "";
    break;
    case "1": return "M";
    break;
    case "2": return "MM";
    break;
    case "3": return "MMM";
    break;
  } 
}
  };
  
 



const converter = num => {
  return num.split("").reverse().map((d, index) => romanConverter(d, index)).reverse().join("");
};

const convertNumber = () => {
  output.style.display = 'block'
  output.style.fontFamily = "Romanesco"
  
  if(!number.value){
    output.textContent = "Please enter a valid number";
  } else if(parseInt(number.value) < 1) {
    output.textContent = "Please enter a number greater than or equal to 1"
  } else if(parseInt(number.value) >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999"
  } else {
    output.style.fontFamily = 'Roman'
    output.textContent = converter(number.value);
  }
};
convert.addEventListener("click", convertNumber);