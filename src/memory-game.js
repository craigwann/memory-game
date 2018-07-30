var showcards =[]

export function flipCard(id) {
  $(id).toggleClass("upright");
  $(id).toggleClass("flip");
  $(id).children('p').toggle();
}

export function cardMatch(name, id) {


  if (showcards.length === 0) {
  $("#" + id).toggleClass("upright");
  $("#" + id).toggleClass("flip");
  $("#" + id).children('p').toggle();
  showcards.push(name);
  showcards.push(id);
  }

  else if (showcards[0] === name) {
    $("#" + id).toggleClass("upright");
    $("#" + id).toggleClass("flip");
    $("#" + id).children('p').toggle();
    showcards =[];
    $("#" + id).off("click");
    $(showcards[1]).off("click");
  }
  else {
    $("#" + id).toggleClass("upright");
    $("#" + id).toggleClass("flip");
    $("#" + id).children('p').toggle();
    $(showcards[1]).toggleClass("upright");
    $(showcards[1]).toggleClass("flip");
    $(showcards[1]).children('p').toggle();
  }
  return showcards;
}
