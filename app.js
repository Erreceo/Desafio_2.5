var http = require("http");
var fs   = require("fs");
var url	 = require("url");

var atendeRequisicao = function(request, response){
	response.writeHead(200, {"Content-Type":"text/html; charset=utf8"});
	var result = url.parse(request.url, true);

	if (result.pathname == "/artigos" || result.pathname == "/") {
		fs.readFile(__dirname+"/artigos.html", function(erro, html){
			response.write(html);
			response.end();
		});
	}else if (result.pathname == "/contatos"){
		fs.readFile(__dirname+"/contato.html", function(erro, html){
			response.write(html);
			response.end();
		});	
	}else{
		fs.readFile(__dirname+"/erro.html", function(erro, html){
			response.write(html);
			response.end();
		});
	}
	
}


var server = http.createServer(atendeRequisicao);

var servidorLigou = function () {
	console.log("Servidor Ligou :)");
}

server.listen(8080, servidorLigou);