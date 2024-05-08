import api from "./api"

// const dados = {
//     name: "tarefa 1",
//     description: "Descricao da Tarefa 1",
//     priority: "alta"
// }

export const storeTask = async (taskData) => {
    try {
        const response = await api.post('/tasks.json', taskData)
        console.log(response.data.name)
    } catch (err) {
        console.log(err)
    }
}

export const getAllTasks = async (token) => {
    
    try {
        const tasks = []
        const response = await api.get(`/tasks?key=${token}.json`)

        for(key in response.data) {
            const task = {
                ...response.data[key],
                id: key,
            }
            tasks.push(task)
        }
        return tasks;
    } catch(err) {
        console.log(err)
    }

}

export const deleteTask = async () => {
    try {
        const response = await api.delete("/tasks/"+"-Nx3B3PzXZgzr9KBDDNd"+".json")
        console.log(response)
    } catch(err) {
        console.log("ERRO: ", err)
    }
}

export const updateTasks = async () => {
    try {
        const response = await api.put('/tasks/-Nx3B3_QWPLibh-gocYY.json', {
            title: "Fazer o Trabalho Final de React Native",
            description: "Todo mundo vai trabalhar",
            priority: "alta"
        })
    } catch(err) {
        console.log("ERRO: ", err)
    }
}


const getTaskbyId = () => {}