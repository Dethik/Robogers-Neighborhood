$(document).ready(function() {
  $("#neighborhood").submit(function(event) {
    event.preventDefault();
    const input = $("#numberInput").val();
  });
});

function temp(input) {
  let inputAr = [];
  let stringer = [];
  for (let i = 0; i <= input; i++);
  inputAr.push(i);
  stringer = inputAr.join(" ");
  splity = stringer.split(" ");
  if (splity[i].includes("3")) { 
    outtyput.push("Won't you be my neighbor?")
  }
  else if (splity[i].includes("2")) {
    outtyput.push("Boop!")
  }
};