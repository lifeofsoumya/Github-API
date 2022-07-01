const APIURL = 'https://api.github.com/users/lifeofsoumya';

const getData = async(api) => {
    const response = await fetch(api)
    const data = await response.json()
    const userName = data.name;
    const userCompany = data.company;
    const idUser = data.id;
    const userBlog = data.blog;
    const usarAvtr = data.avatar_url;
    const repoCount = data.public_repos;
    const followers = data.followers;
    const following = data.following;
    const userType = data.type;
    const userBio = data.bio;

    console.log(idUser, userName, userCompany, userBlog, usarAvtr);

}
getData(APIURL);


const REPOAPI = `https://api.github.com/users/lifeofsoumya/repos`;

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

    console.log("Majorly Languages used: ");
    console.log(counts)
    console.log("Stars Gained: " + allStar);

    return allRepo;
}

getRepo(REPOAPI);