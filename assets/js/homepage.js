var getUserRepos = function (user) {
    const apiURL = `https://api.github.com/users/${user}/repos`;
    fetch(apiURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data)
        })
};
getUserRepos("abarragan89");