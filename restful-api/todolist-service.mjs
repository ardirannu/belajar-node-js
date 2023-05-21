//export class
export class TodolistService{
    
    todolist = ["Ardianto", "Rannu"]; //untuk simpan data
    
    getJsonTodolist(){ //function untuk atur data array ke json
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todolist.map((value, index) => { //mapping array untuk ambil id dari index array
                return {
                    id: index,
                    todo: value,
                }
            })
        });
    }

    getTodolist(request, response){
        response.write(this.getJsonTodolist()); //call function getJsonTodolist
        response.end();
    }

    createTodo(request, response){
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString()); //parsing request dari buffer ke json string
            this.todolist.push(body.todo); //push data todo ke array arraylist

            response.write(this.getJsonTodolist()); // mengembalikan data
            response.end();
        });
    }

    updateTodo(request, response){
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString()); //parsing request dari buffer ke json string
            if(this.todolist[body.id]){ //cek ada id yg akan diupdate atau tidak
                this.todolist[body.id] = body.todo; //update sesuai id
            }

            response.write(this.getJsonTodolist()); // mengembalikan data
            response.end();
        });
    }

    deleteTodo(request, response){
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString()); //parsing request dari buffer ke json string
            if(this.todolist[body.id]){ //cek ada id yg akan diupdate atau tidak
                this.todolist.splice(body.id, 1); //geser data array dengan splice
            }

            response.write(this.getJsonTodolist()); // mengembalikan data
            response.end();
        });
    }

}