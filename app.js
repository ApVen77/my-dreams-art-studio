//to return the current date
const d = new Date();
const dayNumber = d.getDay();
console.log(dayNumber);

function sales() {
  if (dayNumber == 0) {
    return `"Buy-One-Get-One-Free"`;
  } else if (dayNumber == 1) {
    return `"Take and Paint"`;
  } else if (dayNumber == 2) {
    return `"Add a Canvas for Free"`;
  } else if (dayNumber == 3) {
    return `"Spin for a Free Prize!"`;
  } else if (dayNumber == 4) {
    return `"Pick-a-Day"`;
  } else if (dayNumber == 5) {
    return `"10% Off Day"`;
  } else if (dayNumber == 6) {
    return `"No Discounts Today "`;
  } else {
    return " ";
  }
}

const element = document.getElementById("post");
element.innerHTML = " ✨Daily Deal ✨" + sales();
