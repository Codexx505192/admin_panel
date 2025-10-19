const loginContainer = document.getElementById('loginContainer');
const adminContainer = document.getElementById('adminContainer');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userList = document.getElementById('userList');

const adminUser = {
  username: "admin",
  password: "12345"
};



// Список пользователей
const users = [
  { id: 1, name: "Иван", status: "Активен" },
  { id: 2, name: "Мария", status: "Заблокирован" },
  { id: 3, name: "Сергей", status: "Активен" }
];

loginBtn.addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === adminUser.username && password === adminUser.password) {
    loginContainer.style.display = 'none';
    adminContainer.style.display = 'block';
    renderUsers();
  } else {
    alert("Неверный логин или пароль");
  }
});

logoutBtn.addEventListener('click', () => {
  adminContainer.style.display = 'none';
  loginContainer.style.display = 'block';
});

function renderUsers() {
  userList.innerHTML = "";
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.name} — ${user.status}`;
    const banBtn = document.createElement('button');
    banBtn.textContent = user.status === "Активен" ? "Заблокировать" : "Разблокировать";
    banBtn.onclick = () => toggleStatus(user.id);
    li.appendChild(banBtn);
    userList.appendChild(li);
  });
}

function toggleStatus(id) {
  const user = users.find(u => u.id === id);
  user.status = user.status === "Активен" ? "Заблокирован" : "Активен";
  renderUsers();
}
