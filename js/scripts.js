$(document).ready(function() {
  $("#neighborhood").submit(function(event) {
    event.preventDefault();
    const input = $("#numberInput").val();
    temp(input)
  });
});

function temp(input) {
  let inputAr = [];
  let stringer = [];
  let splity = [];
  let outtyput = [];
  for (let i = 0; i <= input; i++) {
    inputAr.push(i);
    stringer = inputAr.join(" ");
    splity = stringer.split(" ");
    if (splity[i].includes("3")) { 
      outtyput.push("Won't you be my neighbor?")
    }
    else if (splity[i].includes("2")) {
      outtyput.push("Boop!")
    }
    else if (splity[i].includes("1")) {
      outtyput.push("Beep!")
    } else {
      outtyput.push(i);
      // console.log(outtyput)
    }
  }
  return product
};