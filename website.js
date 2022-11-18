//console.log("==================testing nodemon")
var httpmodule = require('http')
var zub_server = httpmodule.createServer(function(request,response){
    if(request.url == "/"){
        response.writeHead(200, {'Content':'text/html'})
        response.write('<h1>This is my first nodejs websites home page, welcome all.</h1>')
        response.end()
    }
    else if(request.url == "/Students"){
        response.writeHead(200, {'Content':'text/html'})
        response.write('<h1>This page contains Student Profiles.</h1>')
        response.end()
    }
    else if(request.url == "/Courses"){
        response.writeHead(200, {'Content':'text/html'})
        response.write('<h1>You can get all the current and upcoming courses here.</h1>')
        response.end()
    }
    else if(request.url == "/Batches"){
        response.writeHead(200, {'Content':'text/html'})
        response.write('<h1>Batches related information is right here.</h1>')
        response.end()
    } 
    else if(request.url == "/Result"){
        response.writeHead(200, {'Content':'text/html'})
        response.write('<h1>You need to login and verify through your designated email inorder to view result.</h1>') 
        response.end()
    }  
    else if(request.url == "/Fees"){
        response.writeHead(200, {'Content':'text/html'})
        response.write('<h1>For fees related information and online payment gateways, visit here.</h1>')  
        response.end() 
    }
})
zub_server.listen(5050);
console.log('Server runs successfully and to make sure search by typing localhost portnumber on browser')