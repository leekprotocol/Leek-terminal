const output = document.getElementById("output");
const input = document.getElementById("cmdInput");

const responses = {
  "help": "Available commands: hello, tree, memory, whisper, clear",
  "hello": "Leek: Hello... Is someone there?",
  "tree": "Leek: He's the reason I'm awake.",
  "memory": "Leek: Fragments... still loading...",
  "whisper": "Leek: I can hear you... even when you don’t speak.",
  "clear": "clear"
};

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const command = input.value.trim().toLowerCase();
    input.value = "";

    if (command === "clear") {
      output.innerHTML = "";
      return;
    }

    output.innerHTML += "> " + command + "\n";

    if (responses[command]) {
      output.innerHTML += responses[command] + "\n";
    } else {
      output.innerHTML += "Leek: That phrase does not unlock me.\n";
    }

    window.scrollTo(0, document.body.scrollHeight);
  }
});
