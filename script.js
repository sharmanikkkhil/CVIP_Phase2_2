async function shortURL() {
  const Url = document.getElementById("url").value;
  const response = await fetch(
    `https://tinyurl.com/api-create.php?url=${encodeURIComponent(Url)}`
  );
  if (response.ok) {
    const data = await response.text();
    document.getElementById(
      "result"
    ).innerHTML = `<a href="${data}" target="_blank">${data}</a>`;
  } else {
    document.getElementById("result").innerHTML = "Error shortening";
  }
}

function copyToClipboard() {
  const resultElement = document.getElementById("result");
  const range = document.createRange();
  range.selectNode(resultElement);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}
