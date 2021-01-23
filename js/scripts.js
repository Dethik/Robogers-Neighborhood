$(document).ready(function() {
  $("#output").hide();
  $("#problem").hide()
  $("#neighborhood").submit(function(event) {
    event.preventDefault();
    const input = $("#numberInput").val();
    $(".nameInput").text($("#name").val() + ", ");
    if (input > 1000){
      $(".problemText").text("Lets not damage our software friend, try a smaller unit!");
      $("#problem").fadeIn();
      $("#output").fadeOut();
    } 
    else if (input == 0) {
      $(".problemText").text("'Zero' isn't valid, try something more!");
      $("#problem").fadeIn();
      $("#output").fadeOut();
    }
    else if (input < 0) {
      $(".problemText").text("Negative numbers lead to Negative Neighbors, try some thing positive friend!");
      $("#problem").fadeIn();
      $("#output").fadeOut();
    } else {
      $(".outputText").text(temp(input));
      $("#output").fadeIn();
      $("#problem").fadeOut();
    };
  });
});

function temp(input) {
  let inputA = [];
  let stringA = [];
  let splitA = [];
  let outputA = [];
  for (let i = 0; i <= input; i++) {
    inputA.push(i);
    stringA = inputA.join(" ");
    splitA = stringA.split(" ");
    if (splitA[i].includes("3")) { 
      outputA.push("Won't you be my neighbor?")
    }
    else if (splitA[i].includes("2")) {
      outputA.push("Boop!")
    }
    else if (splitA[i].includes("1")) {
      outputA.push("Beep!")
    } else {
      outputA.push(i);
    }
  }
  const product = outputA.join(", ");
  return product
};