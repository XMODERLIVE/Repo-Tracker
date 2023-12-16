
document.addEventListener('DOMContentLoaded', function () {
    const username = 'xmoderlive';
    const reposContainer = document.getElementById('repos-container');

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(repos => displayRepos(repos))
        .catch(error => console.error('Error failed to get repositories:', error));

    function displayRepos(repos) {
        repos.forEach(repo => {
            const repoCard = document.createElement('div');
            repoCard.classList.add('repo-card');

            const repoName = document.createElement('h2');
            repoName.textContent = repo.name;

            const repoDescription = document.createElement('p');
            repoDescription.textContent = repo.description || 'No description e';

            repoCard.appendChild(repoName);
            repoCard.appendChild(repoDescription);
            reposContainer.appendChild(repoCard);
        });
    }
});
