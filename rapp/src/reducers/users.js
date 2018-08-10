

const Users = (state = [], action) => {

  switch (action.type){
   case "ADD_USER":
   return [...state, {
       name : action.payload.name,
       id : action.payload.id
   }];
   case "LOAD_USERS":
        return [...state, ...action.payload.users];
   default : 
   return state;   
  }
}

export default Users;