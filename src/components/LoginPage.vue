<template>
    <div>
        <h1>AAAAAAAAAAAAAAA</h1>
        <button id="login">Login</button>
        <button id="logout">Logout</button>
        <pre id="messages" style="height: 400px; overflow: scroll"></pre>
    </div>
    
</template>
<script>
    const messages = document.querySelector('#messages');
    const logout = document.querySelector('#logout');
    const login = document.querySelector('#login');

    function showMessage(message) {
        messages.textContent += `\n${message}`;
        messages.scrollTop = messages.scrollHeight;
    }

    function handleResponse(response) {
        return response.ok
        ? response.json().then((data) => JSON.stringify(data, null, 2))
        : Promise.reject(new Error('Unexpected response'));
    }

    login.onclick = function () {
    fetch('/login', { method: 'POST', credentials: 'same-origin' })
      .then(handleResponse)
      .then(showMessage)
      .catch(function (err) {
        showMessage(err.message);
      });
  };

  logout.onclick = function () {
    fetch('/logout', { method: 'DELETE', credentials: 'same-origin' })
      .then(handleResponse)
      .then(showMessage)
      .catch(function (err) {
        showMessage(err.message);
      });
  };
</script>