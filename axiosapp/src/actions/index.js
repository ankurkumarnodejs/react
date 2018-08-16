import axios from 'axios';

export function changeColor(color){
return{
    type: "CHANGE_COLOR",
    color : color
    }
};

export function loadColor(){
return(dispatch) => {
return axios.get("http://localhost:3000/devcolor").then((data) => {
    dispatch(changeColor(data.data.color))
    });
}
};