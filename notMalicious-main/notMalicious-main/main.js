async function sendPost() {
  const url = 'http://198.211.96.96:8080/webhook';
  const data = { username: "TestName123" };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

const signIn = document.getElementById("sign-in");
signIn.addEventListener("click", () => {
    alert("clicked");
    sendPost();
})


