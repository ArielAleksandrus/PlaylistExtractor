var cheerio = require('cheerio');
var fs = require('fs');
fs.readFile('youtubepage.html', 'utf8', function(err, html){
	$ = cheerio.load(html);

	var links = "";
	for(var i = 0; i < $("#eow-description").children().length; i++){
		var child = $("#eow-description").children()[i];
	  if(child.tagName == "a"){
	    if(!!child.attribs['data-sessionlink'] && child.attribs['data-sessionlink'].indexOf('itct') > -1){
	      links += child.attribs.href + "\n";
	    }
	  }
	}
	fs.writeFile("list.txt", links, function(err){
		if(err)
			console.log(err);
	});
	fs.writeFile("title.txt", $("#eow-title").text().trim(), function(err){
		if(err)
			console.log(err);
	});
});