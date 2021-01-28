function checkError(input) {
  if (input > 1000){
    output = ("Lets not damage our software friend, try a smaller unit!");
  } 
  else if (input == 0) {
    output = ("'Zero' isn't valid, try something more!");
  }
  else if (input < 0) {
    output = ("Negative numbers lead to Negative Neighbors, try some thing positive friend!");
  } else {
    output = input;
  };
  return output;
}

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

$(document).ready(function() {
  $("#output").hide();
  $("#problem").hide()
  $("#neighborhood").submit(function(event) {
    event.preventDefault();
    const input = $("#numberInput").val();
    $(".nameInput").text($("#name").val() + ", ");
    
    let output = temp(input)
    $(".outputText").text(output);
    $("#output").fadeIn();
  });
});