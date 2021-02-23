class LocalStorage{
    constructor(){

    }

    saveLocalStorage(user){
        localStorage.setItem(user, user);
    }

    clearLocalStorage(){
        //localstorage'i silme işlemi
        localStorage.clear();
        lastUsersDOM.innerHTML = "";
    }

    getLocalStorage(){
        lastUsersDOM.innerHTML = "";
        for (let i = 0; i < localStorage.length; i++){
            lastUsersDOM.innerHTML += `
            <li class="list-group-item">${localStorage.getItem(localStorage.key(i))}</li>
        `;  
        }
    }

}