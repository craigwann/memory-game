import { cardMatch, reset } from './memory-game';
import './styles.css';


$(document).ready(function() {
  $('.col-md-3').click(function() {
  var cardId = $(this).attr('id');
  // flipCard(cardId);
  var cardName = $(this).attr('name');
  cardMatch(cardName, cardId);
  });

  $('#reset').click(function() {
  reset();
  });

});
