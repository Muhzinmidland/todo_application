import commonAPI from "./commonAPI"

const serverURL = 'http://localhost:5000'

// upload todo item
export const uploadTodo = async (reqbody) => {
    return await commonAPI('POST',`${serverURL}/todoList`,reqbody)
}

// get all todo item

export const getAllTodo = async () => {
    return await commonAPI('GET',`${serverURL}/todoList`,"")
}

//delete item

export const deleteAllTodo = async(id) => {
    return await commonAPI('DELETE',`${serverURL}/todoList/${id}`,{})
}

//get todo details with  id

export const getTodoDetailsById = async(id) =>{
    return await commonAPI('GET',`${serverURL}/todoList/${id}`,"")
 }
 