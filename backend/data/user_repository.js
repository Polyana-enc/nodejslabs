const mock_students = [
    { id: 0, name: "Рибалко Максим", age: 19, github_link: "https://github.com/rybmks", photo: "img/rybalko.jpg" },
    { id: 1, name: "Куренков Максим", age: 18, github_link: "https://github.com/orgs/Polyana-enc/people/KurenkovMaxgit", photo: "img/kyrenkov.jpg"  },
    { id: 2, name: "Євген Ткаченко", age: 18, github_link: "https://github.com/Hang-Petrov", photo: "img/tkachenko.jpg" },
    { id: 3, name: "Данська Анастасія", age: 18, github_link: "https://github.com/orgs/Polyana-enc/people/danskaya", photo: "img/danskaya.jpg" },
    { id: 4, name: "Моріна Анна", age: 18, github_link: "https://github.com/orgs/Polyana-enc/people/MorinaAnna", photo: "img/morina.jpg" }
];

function get_student(id) {
    const student = mock_students.find(s => s.id === id);

    return student;
}

module.exports = { get_student };