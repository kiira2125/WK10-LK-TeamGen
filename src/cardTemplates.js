// create the team
const createTeam = team => {

    // create the manager html
    const cardManager = manager => {
        return /*html*/ `
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class="title">${manager.getName()}</h2>
                    <h3><i class="fa fa-user" aria-hidden="true"></i> ${manager.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list">
                        <li>ID: ${manager.getId()}</li>
                        <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li>Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        `;
    };

    // create the html for engineers
    const cardEngineer = engineer => {
        return /*html*/ `
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class="title">${engineer.getName()}</h2>
                    <h3><i class="fa fa-code" aria-hidden="true"></i> ${engineer.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list">
                        <li> ID: ${engineer.getId()}</li>
                        <li> Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        `;
    };

    // create the html for interns
    const cardIntern = intern => {
        return /*html*/ `
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class="title">${intern.getName()}</h2>
                    <h3><i class="fa fa-graduation-cap" aria-hidden="true"></i> ${intern.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list">
                        <li>ID: ${intern.getId()}</li>
                        <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li>School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => cardManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => cardEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => cardIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return /*html*/ `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Company | Org Chart </title>
</head>

<body>
    <div class="bannerContainer">
        <h1 class="banner">My Team</h1>
    </div>
    <div class="cards-container">
        <div class="row">
            <div class="teamInfo col-12 d-flex justify-content-center">
                ${createTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};