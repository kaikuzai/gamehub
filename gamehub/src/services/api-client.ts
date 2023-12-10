import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api', 
    params: {key: '3e15ce07218a48659d88959ccf52c562'}, 

})

