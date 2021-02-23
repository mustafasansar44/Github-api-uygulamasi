class Github{
    constructor(){
        this.url = "https://api.github.com/users/"
    }

    async getGithubProfiles(username){
        const profUrl = this.url + username
        const repoUrl = this.url + username + "/repos"

        const profile = await fetch(profUrl)
        const repos = await fetch(repoUrl)
        

        const ui = new UI();

        if(profile.status === 200){
            await ui.loadProf(profile.json())
            await ui.loadRepos(repos.json())
        }else{
            alert("Böyle biri yok.")
        }

        
    }


}