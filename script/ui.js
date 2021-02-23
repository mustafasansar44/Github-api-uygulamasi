
const profileDOM = document.getElementById("profile");
const reposDOM = document.getElementById("repos");
const lastUsersDOM = document.getElementById("last-users");
const storage = new LocalStorage();
class UI{
    constructor(){

    }
    loadProf(profile){
        profile
        .then((res) => {
            profileDOM.innerHTML = `
                <div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <a href="${res.html_url}" target = "_blank">
                         <img class="img-fluid mb-2" src="${res.avatar_url}"> </a>
                         <hr>
                         <div id="fullName"><strong>${res.name}</strong></div>
                         <hr>
                         <div id="bio">${res.bio}</div>
                        </div>
                      <div class="col-md-8">
                            <button class="btn btn-secondary">
                                  Takipçi  <span class="badge badge-light">${res.followers}</span>
                            </button>
                            <button class="btn btn-info">
                                 Takip Edilen  <span class="badge badge-light">${res.following}</span>
                              </button>
                            <button class="btn btn-danger">
                                Repolar  <span class="badge badge-light">${res.public_repos}</span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company">${res.company}</span>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location">${res.location}</a>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="company">${res.company}</span>
                                    
                                </li>
                                
                            </div>
                               
                            
                      </div>
                </div>
            `;
            this.lastSearch(res.login); // Üstte bilgileri ekledikten sonra lastSearch fonksiyonuna yukarıdaki kullanıcıyı gönderiyorum.
        })

    }
    loadRepos(repos){
        reposDOM.innerHTML = "";
        repos
        .then((res) => {
            res.forEach(repo => {
                reposDOM.innerHTML += `
                <div class="mb-2 card-body">
                        <div class="row">
                            <div class="col-md-2">
                            <span>${repo.full_name}</span> 
                            <a href="${repo.clone_url}" target = "_blank" id = "repoName">Repoya gidin.</a>
                            </div>
                            <div class="col-md-6">
                                <button class="btn btn-secondary">
                                    Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                                </button>
    
                                <button class="btn btn-info">
                                    Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks}</span>
                                </button>
                        
                            </div>
                    </div>
                </div>
                `
            });
        })
    }
    lastSearch(user){
        //Localstorage'e kaydetme işlemi
        storage.saveLocalStorage(user);

        //Localstorage'deki bilgileri yazdırma
        storage.getLocalStorage();


        
    }
}
