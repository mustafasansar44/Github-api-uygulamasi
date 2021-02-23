const githubForm = document.getElementById("github-form");
const clearButtonDOM = document.getElementById("clear-last-users");
const github = new Github();
const localStrg = new LocalStorage();


eventListeners();
getLocalStorage();

function eventListeners(){
    clearButtonDOM.addEventListener("click", clearLastUsers)
    githubForm.addEventListener("submit", searchPlayer)
}

function searchPlayer(e){
    e.preventDefault();
    const githubName = document.getElementById("githubname").value;
    if(githubName === ""){
        alert("Lütfen arama kutusunu boş bırakmayın.")
    }else{
        github.getGithubProfiles(githubName)
    }
}

function clearLastUsers(){
    localStrg.clearLocalStorage();
}

function getLocalStorage(){
    localStrg.getLocalStorage();
}

    
    






















































