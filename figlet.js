async function generateASCII() {
  const inputText = document.getElementById('inputText').value;
  const response = await fetch('https://hello-world-rough-river-c66d.elonfoster900.workers.dev/', {
    method: 'POST',
    body: inputText,
  });
  const asciiText = await response.text();
  document.getElementById('output').innerText = asciiText;
}
