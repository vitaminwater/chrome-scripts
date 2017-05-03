content = '';
interval = null;
function waitLoad() {
  if ($('.search-is-loading').length == 0) {
    clearInterval(interval);
    getMails();
  }
}
function getMails() {
  $('span.name.actor-name').each(function(i, e){
    content+=$(e).text().toLowerCase().split(' ').join('_') + '@carrefour.com\n';
  });
  if ($('div.next-text').length == 0) {
    console.log(content);
  } else {
    $('div.next-text')[0].click();
    interval = setInterval(waitLoad, 100);
  }
}
getMails();
