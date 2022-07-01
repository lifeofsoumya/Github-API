const mainContainer = document.querySelector("#main-container");


var userRef;

const searchOpr = async() =>{
    userRef = document.querySelector("#user-name").value;
let searchBtn = document.querySelector("#search-btn");

await searchBtn.addEventListener("click", ()=>{
    if(userRef.length=0){
        console.log("abbe Yar");
    }
    else{
        getData(APIURL);
        getRepo(REPOAPI);
    }
})
}

searchOpr();


var userId;
var userName;
var userCompany;
var idUser;
var userBlog;
var userAvatar;
var repoCount;
var followers;
var following;
var userType;
var userBio;


const APIURL = `https://api.github.com/users/${userRef}`;

const getData = async(api) => {
    const response = await fetch(api)
    const data = await response.json()
    userId = data.login;
    userName = data.name;
    userCompany = data.company;
    idUser = data.id;
    userBlog = data.blog;
    userAvatar = data.avatar_url;
    repoCount = data.public_repos;
    followers = data.followers;
    following = data.following;
    userType = data.type;
    userBio = data.bio;

    // console.log(idUser, userName, userCompany, userBlog, userAvatar);

}
// getData(APIURL);

const REPOAPI = `https://api.github.com/users/${userRef}/repos`;
console.log(REPOAPI);

allRepo = [];
allStar = 0;
allLanguages = []

const getRepo = async(api) => {
    const res = await fetch(api)
    const data = await res.json();

    for (repo of data){
        allRepo.push(repo.name);
    }
    for (repo of data){
        allLanguages.push(repo.language);
    }
    for (repo of data){
        allStar += (repo.stargazers_count);
    }


    const counts = {};
    allLanguages.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

    // console.log(allRepo);
    // console.log("Languages used: ");
    // console.log(allLanguages);

    // for(var i = 0; i<allRepo.length; i++){
    //     console.log(allRepo[i] + " " + allLanguages[i])
    // }

    // console.log("Majorly Languages used: ");
    // console.log(counts)
    // console.log("Stars Gained: " + allStar);

    if(userBio==null){userBio="No Bio Added"}

    const box = document.createElement("div");
    box.classList.add("avatar-img");
    box.innerHTML = `
    <img src="${userAvatar}" alt="Github User image" />
    <h2>${userName}</h2>
    <p>${userBio}</p>
    <h4>Stars Gained: ${allStar}</h4>
    <h4>Public Repo Count: ${repoCount}</h4>
    <!-- <h6>Major Languages: ${allLanguages}</h6> -->
    <h6>Public Repositories: </h6>
    `;
    mainContainer.appendChild(box);

    for( var j =0; j<allRepo.length; j++){
        const repos = document.createElement("div");
        repos.classList.add("all-repo");
        repos.innerHTML = `
        <a href="https://github.com/${userId}/${allRepo[j]}" target="_blank" ><p class="each-repo">${allRepo[j]}</p></a>
        `;
        mainContainer.appendChild(repos);
    }
}

// getRepo(REPOAPI);



// const LngApi = `https://api.github.com/repos/lifeofsoumya/${repo.name}/languages`;

// const languageCharCount = async(api) => {

// }



