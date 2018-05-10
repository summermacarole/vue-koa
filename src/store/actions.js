import axios from 'axios'
export default {
    getBase({commit,state},params){
        console.log('获取基地址')
        return axios.get('http://localhost:3000/base')
    },
    getBaseAbout({commit,state},params){
        console.log(params)
        return axios.get(params+'/about');
    }
}
