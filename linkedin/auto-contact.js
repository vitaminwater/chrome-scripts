setInterval(function() {
  $(document).scrollTop(10000000);
}, 10000);
function gogogo() {
  var buttons = $('button[data-control-name="invite"]');
  if (buttons.length == 0) {
    console.log('done');
    return;
  }
  console.log('follow');
  buttons[0].click();
  setTimeout(gogogo, Math.random() * 3000 + 1000);
}
gogogo();
