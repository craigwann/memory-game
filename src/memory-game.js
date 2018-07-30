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
  $("#" + id).addClass("noClick");
  showcards.push(name);
  showcards.push(id);
  }

  else if (showcards[0] === name) {
    $("#" + id).toggleClass("upright");
    $("#" + id).toggleClass("flip");
    $("#" + id).children('p').toggle();
    $("#" + id).addClass("noClick");
    $("#" + showcards[1]).addClass("noClick");
    showcards =[];
  }
  else {
    $("#" + id).toggleClass("upright");
    $("#" + id).toggleClass("flip");
    $("#" + id).children('p').toggle();
    $("#" + showcards[1]).toggleClass("upright", 1000);
    $("#" + showcards[1]).toggleClass("flip", 1000);
    $("#" + showcards[1]).children('p').toggle(1000);
    $("#" + id).toggleClass("upright", 1000);
    $("#" + id).toggleClass("flip", 1000);
    $("#" + id).children('p').toggle(1000);
    $("#" + showcards[1]).removeClass('noClick');
    showcards =[];
  }
  return showcards;
}


export function reset() {
  $(".col-md-3").removeClass("flip");
  $(".col-md-3").removeClass("noClick");
  $(".col-md-3").addClass("upright");
  $(".col-md-3").children('p').hide();
}
