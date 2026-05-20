const API_URL = "http://localhost:5000/api";

// Register
const registerForm =
  document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener(
    "submit",
    async (e) => {
      e.preventDefault();

      const name =
        document.getElementById("name").value;

      const email =
        document.getElementById("email").value;

      const password =
        document.getElementById("password").value;

      try {
        const response = await fetch(
          `${API_URL}/auth/register`,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              name,
              email,
              password,
            }),
          }
        );

        const data = await response.json();

        if (data.success) {
          localStorage.setItem(
            "token",
            data.data.token
          );

          alert("Registration successful");

          window.location.href =
            "./index.html";
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error(error);

        alert("Something went wrong");
      }
    }
  );
}

// Login
const loginForm =
  document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener(
    "submit",
    async (e) => {
      e.preventDefault();

      const email =
        document.getElementById("email").value;

      const password =
        document.getElementById("password").value;

      try {
        const response = await fetch(
          `${API_URL}/auth/login`,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              email,
              password,
            }),
          }
        );

        const data = await response.json();

        if (data.success) {
          localStorage.setItem(
            "token",
            data.data.token
          );

          alert("Login successful");

          window.location.href =
            "./index.html";
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error(error);

        alert("Something went wrong");
      }
    }
  );
}