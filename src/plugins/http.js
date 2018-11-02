//模块
//目的:把axios库改成插件
// import axios from 'axios'

// const HttpTool ={}
// HttpTool.install=(Vue)=>{
//     Vue.prototype.$http=asios
// }

// export default HttpTool
import axios from 'axios'
const HttpTool={}
HttpTool.install = (Vue)=>{
    axios.defaults.baseURL= 'http://localhost:8888/api/private/v1/'
    Vue.prototype.$http=axios
}

export default HttpTool