$("span:contains('•••• 9842')").each(function(i, e){$(e).click()});$("span:contains('Save Invoice')").each(function(i, e){setTimeout(function(){$(e).click()}, i * 2000)})
