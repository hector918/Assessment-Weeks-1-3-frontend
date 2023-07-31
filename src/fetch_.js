const API = process.env.REACT_APP_API_URL;
const default_fetch_options = { 
  "Access-Control-Allow-Origin": "*" ,
  "Content-Type": "application/json",
};
//helper///////////////////////////////////////////////////
function error_handle(error){
  console.error(error);
}

function fetch_get(url, callback){
  const body = {
    method: "GET",
    headers: {
      ...default_fetch_options,
    },
    credentials: "include",
  }
  
  fetch(url, body)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch(error => {
      callback({error: "fetch error"});
      error_handle(error);
    });
}
async function fetch_get_async(url){
  try {
    const body = {
      method: "GET",
      headers: {
        ...default_fetch_options,
      },
      credentials: "include",
    };
    const response = await fetch(url, body);
    const ret = await response.json();
    return ret;
  } catch (error) {
    error_handle(error);
    return error;
  }
}
////export function//////////////////////////////////////
const readAllItems = (callback) => {
  try {
    fetch_get(`${API}/items`, (res) => {
      if(res.error){
        callback({error: 'fetch all items failed.'});
      }else{
        callback(res);
      }
    });
  } catch (error) {
    // error_handle(error);
    callback({error: 'fetch all items failed.'});
  }
}

const readItemById = async(id) => {
  try {
    if(id !== undefined){
      const ret = await fetch_get_async(`${API}/item/${id}`);
      return ret;
    }else return {error: 'id undefined.'};
    
  } catch (error) {
    error_handle(error);
    return error;
  }
}
//////////////////////////////////////////
export default {
  readAllItems,
  readItemById
}