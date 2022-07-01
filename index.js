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


const REPOAPI = `https://api.github.com/users/${userId}/repos`;

const getRepo = async(api) => {
    const res = await fetch(api)
    const data = await res.json();
    allRepo = []
    for (repo of data){
        allRepo.push(repo.name);
    }
    console.log(allRepo);
    return allRepo;
}

getRepo(REPOAPI);