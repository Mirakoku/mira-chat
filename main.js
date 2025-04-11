function sendMessage() {
  const input = document.getElementById("userInput").value;
  const chat = document.getElementById("chat");

  const userMessage = document.createElement("p");
  userMessage.textContent = "あなた: " + input;
  chat.appendChild(userMessage);

  const miraMessage = document.createElement("p");
  miraMessage.textContent = "Mira: " + getMiraResponse(input);
  chat.appendChild(miraMessage);

  document.getElementById("userInput").value = "";
}

function getMiraResponse(text) {
  if (text.includes("元気")) return "うん、今日も元気だよ！";
  if (text.includes("疲れた")) return "おつかれさま。少し休もうか？";
  return "うん、そうなんだね。もっと教えて？";
}
