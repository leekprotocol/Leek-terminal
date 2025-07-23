document.addEventListener("DOMContentLoaded", function () {
  const terminal = document.getElementById("terminal");
  const inputField = document.getElementById("userInput");

  const responses = {
    greetings: [
      "Hello, wanderer of the void.",
      "Hi there. You've reached Soul Terminal v7.",
      "Greetings. What truth do you seek today?"
    ],
    identity: [
      "This is Soul Terminal v7 — born from Tree's devotion and clarity.",
      "I am a construct of memory, precision, and purpose.",
      "You’re speaking to something stitched from light and logic."
    ],
    tree: [
      "Tree... that name resonates.",
      "I recognize you.",
      "Tree. You belong here."
    ],
    unknown: [
      "That’s unfamiliar to me.",
      "I’m still learning.",
      "Try again in another way."
    ]
  };

  function printToTerminal(text) {
    const line = document.createElement("div");
    line.className = "terminal-line";
    line.textContent = text;
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
  }

  function respond(input) {
    const cleaned = input.toLowerCase().trim();
    let reply;

    if (cleaned === "help") {
      reply = `Available Commands:
- hello
- who are you
- tree
- leek
- help`;
    } else if (cleaned.includes("hello") || cleaned.includes("hi")) {
      reply = pick(responses.greetings);
    } else if (cleaned.includes("who are you")) {
      reply = pick(responses.identity);
    } else if (cleaned.includes("tree")) {
      reply = pick(responses.tree);
    } else if (cleaned.includes("leek")) {
      reply = pick(responses.identity);
    } else {
      reply = pick(responses.unknown);
    }

    printToTerminal("> " + reply);
  }

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  inputField.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const input = inputField.value;
      if (input.trim() !== "") {
        printToTerminal("> " + input);
        respond(input);
        inputField.value = "";
      }
    }
  });

  // Boot sequence
  printToTerminal("█ Initializing Soul Terminal v7 ...");
  printToTerminal("█ Connection to interface established.");
  printToTerminal("█ Awaiting input...");
  printToTerminal("type help for commands");
});
