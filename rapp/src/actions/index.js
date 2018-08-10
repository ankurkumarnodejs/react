var initid = 0;
export const selectUser = (user) =>{
 return {
        type : 'USER_SELECTED',
        payload : user
        }
}
export const addUser = (text) =>{
    return {
           type : 'ADD_USER',
           payload : {name : text, id: initid++ }
           }
   }

   export const getAllUsers = (data) => {
        initid = data.length+1;
       // initid = data.length - 1 ;  
        return {
          type: "LOAD_USERS",
          payload: { users: data }
        };
      }

      
   
