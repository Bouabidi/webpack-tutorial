// import { getUsers } from "./common/usersAPI";
const getUserModule = () => import("./common/usersAPI");
import "./style.scss";
console.log("Hello webpack!");

/* const fancyFunc = () => {
  return [1, 2];
};

const [a, b] = fancyFunc(); */



const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    getUserModule().then(({ getUsers }) => {
        getUsers().then(json => console.log(json));
    });
    //
});