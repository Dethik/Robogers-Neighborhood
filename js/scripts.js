$(document).ready(function() {
  $("#neighborhood").submit(function(event) {
    event.preventDefault();
    const input = $("#numberInput").val();
    $(".nameInput").text($("#name").val() + ", ");
    if (input > 1000){
      $(".problemText").text("Lets not damage our software friend, try a smaller unit!");
      $("#problem").show();
      $("#output").hide();
    } 
    else if (input == 0) {
      $(".problemText").text("'Zero' isn't valid, try something more!");
      $("#problem").show();
      $("#output").hide();
    }
    else if (input < 0) {
      $(".problemText").text("Negative numbers lead to Negative Neighbors, try some thing positive friend!");
      $("#problem").show();
      $("#output").hide();
    } else {
      $(".outputText").text(temp(input));
      $("#output").show();
      $("#problem").hide();
    };
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
    }
  }
  const product = outtyput.join(", ");
  return product
};


//outtyput -> outputA
//splity -> splitA
//stringer -> stringA
//inputAr -> inputA