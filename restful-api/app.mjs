import http from "http";
import { TodolistService } from "./todolist-service.mjs";

const service = new TodolistService();
const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json'); // set header json untuk response

    if(request.method === "GET"){ // jika requestnya GET
        service.getTodolist(request, response);
    }else if(request.method === "POST"){ // jika requestnya POST
        service.createTodo(request, response);
    }else if(request.method === "PUT"){ // jika requestnya POST
        service.updateTodo(request, response);
    }else if(request.method === "DELETE"){ // jika requestnya POST
        service.deleteTodo(request, response);
    }
    
});

server.listen(3000);