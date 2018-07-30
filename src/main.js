import { cardMatch } from './memory-game';
import './styles.css';


$(document).ready(function() {
  $('.col-md-3').click(function() {
  var cardId = $(this).attr('id');
  // flipCard(cardId);
  var cardName = $(this).attr('name');
  console.log(cardMatch(cardName, cardId));
  });

});
