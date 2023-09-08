const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simulated API call for authentication
  const response = await authenticateUser(username, password);

  if (response.success) {
    message.textContent = "Login successful!";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid username or password";
    message.style.color = "red";
  }
});

async function authenticateUser(username, password) {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulated authentication logic
  if (username === "user" && password === "password") {
    return { success: true };
  } else {
    return { success: false };
  }
}