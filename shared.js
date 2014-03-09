$(function() {
  if ($('html').hasClass('challenge')) {
    var allDone = '<a href="#" class="btn btn-primary l-fixed-br">All Done!</a>';
    $('body').append($('<div>').html(allDone));
  }
});
