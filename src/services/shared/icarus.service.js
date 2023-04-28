import axios from "axios";
export default ()=>{
    const instance = axios.create({
        baseURL: 'https://localhost:7131/api',
        
      });
    
      const token = JSON.parse(localStorage.getItem("userdata") ?? "null") 
    
      if (token){
        instance.defaults.headers.common["Authorization"] = "Bearer "+token
      }
    
      return instance
}