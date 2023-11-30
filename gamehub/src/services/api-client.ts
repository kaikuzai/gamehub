import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api', 
    params: {key: '9455e1e98232420587e223a8b3065377'}, 

})

