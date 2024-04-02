const userInfo = [
    {

        name: "Sohail",
        username: "sohail",
        password: "sohail123"
    },
    {

        name: "Ankit",
        username: "ankit",
        password: "ankit123"
    }
];

const login = (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const isUserExists = (userInfo.find((user) => user.username === username && user.password === password)) ? true : false;

    if (!isUserExists) return alert("Username or Password incorrect!");

    location.href = 'welcome.html';
}

const register = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!name || !username || !password) {
        return alert("Field cannot be blank!");
    }

    userInfo.push({ name, username, password });
    alert("User registred, please login!");
}

const monthlyChart = [
    {
        id: 1,
        activity: "Create project file which contains tables between 12 to 19",
        subject: "Maths"
    },
    {
        id: 2,
        activity: "Solve calculus problems from textbook",
        subject: "Maths"
    },
    {
        id: 3,
        activity: "Read chapter 5 of 'The Origin of Species'",
        subject: "Science"
    },
    {
        id: 4,
        activity: "Write an essay on the French Revolution",
        subject: "History"
    },
    {
        id: 5,
        activity: "Practice speaking English for 30 minutes",
        subject: "English"
    },
    {
        id: 6,
        activity: "Complete chemistry lab report",
        subject: "Science"
    },
    {
        id: 7,
        activity: "Solve trigonometry problems from workbook",
        subject: "Maths"
    },
    {
        id: 8,
        activity: "Research on the Industrial Revolution",
        subject: "History"
    },
    {
        id: 9,
        activity: "Read poetry anthology for literature class",
        subject: "English"
    },
    {
        id: 10,
        activity: "Conduct biology experiment on plant growth",
        subject: "Science"
    }
];

const renderMonth = () => {
    const chart = document.getElementById('chart');
    const uniqueSubjects = new Set(monthlyChart.map(item => item.subject));
    let options = '<option selected>Select</option>';
    uniqueSubjects.forEach(subject => {
        options += `<option>${subject}</option>`;
    });
    chart.innerHTML = options;
}


renderMonth();

const selectedMonth = (e) => {
    const charts = monthlyChart.filter(chart => chart.subject === e.target.value);

    const showActivity = document.getElementById('showActivity');
    let chartCard = '';
    charts.forEach(chart => {
        chartCard += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${chart.subject}</h5>
    <p class="card-text">${chart.activity}</p>
    </div>
    </div>
    `;
    });
    showActivity.innerHTML = chartCard;
};