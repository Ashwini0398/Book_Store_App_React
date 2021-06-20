import axios from 'axios';

export default function axios_service(){

}

axios_service.prototype.post =  function(url,data){
    return axios.post(url,data,{
      headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
      }
    });
}

axios_service.prototype.get =  function(url){
  return axios.get(url,{
      headers: {
        Authorization: localStorage.getItem('token')
      },
    });
  }