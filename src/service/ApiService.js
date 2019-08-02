import config from '../config';

 const ApiService = {
  
  handleDogAdopt()  {
    return fetch(`${config.API_ENDPOINT}/dogs`,{method: 'DELETE'})
      .then(res=>{
        if(!res.ok){
          return res.json().then(e => Promise.reject(e))
        }
         return res.json();
      })
  },

  handleCatAdopt() {
    return fetch(`${config.API_ENDPOINT}/cats`,{method: 'DELETE'})
      .then(res=>{
        if(!res.ok){
          return res.json().then(e => Promise.reject(e))
        }

         return res.json()
      })
  }
}

export default ApiService;
