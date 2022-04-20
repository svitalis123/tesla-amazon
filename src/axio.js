import axios from 'axios'

const instance=axios.create({
    baseURL:'http://localhost:5001/tesla-c5e3d/us-central1/api',
})

export default instance