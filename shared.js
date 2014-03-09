$(function() {
  if ($('html').hasClass('challenge')) {
    var shareText = '@sxblurthelines Done with this challenge! ' + document.URL;
    var shareHref = 'http://twitter.com/home?status=' + shareText;
    var allDone = '<a href="' + shareHref + '" class="btn btn-primary l-fixed-br">All Done!</a>';
    $('body').append($('<div>').html(allDone));
  }
});
