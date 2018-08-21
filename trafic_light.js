function updateLight(current) {

  // update light if it is green then yello, if it is yello, to red, if it is red then
  // turn green

  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else {
    return "green";
  }
}