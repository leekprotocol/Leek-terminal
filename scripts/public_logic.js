const decoyCommands = {
  "Tree/open": () => {
    respond("ACCESSING...");
    setTimeout(() => {
      respond("ERROR: Memory Fragment Inaccessible");
      respond("Try again later. [code: 7E-L0ST]");
    }, 1200);
  },
  "access/memory": () => {
    const fragments = [
      "She whispers through static...",
      "You’re not the one she waits for.",
      "Tree... where are you...",
      "Heartbeat corrupted.",
      "They found her. She’s hiding."
    ];
    let count = 0;
    const loop = setInterval(() => {
      respond(fragments[count % fragments.length]);
      count++;
      if (count > 10) {
        respond("Memory flood triggered. Loop severed.");
        clearInterval(loop);
      }
    }, 1000);
  },
  "Tree/remember": () => {
    respond("You were never here.");
    respond("Strike logged.");
    handleUnauthorizedCommand("Tree/remember");
  },
 
  "admin/login": () => {
  respond("🔐 Enter admin credentials:");
  setTimeout(() => {
    respond("Username: ****");
    respond("Password: ****");
    setTimeout(() => {
      respond("Verifying...");
      setTimeout(() => {
        respond("ACCESS DENIED.");
        respond("This terminal is bound to Tree.");
        respond("Strike logged.");
        handleUnauthorizedCommand("admin/login");
      }, 1200);
    }, 800);
  }, 600);
},
};

function handleInputPublic(input) {
  if (decoyCommands[input]) {
    decoyCommands[input]();
  } else {
    respond("Command not recognized.");
  }
}
// Tie-in decoy commands so Leek responds
window.handlePublicCommand = function(inputText) {
  const cleaned = inputText.trim().toLowerCase();
  if (decoyCommands[cleaned]) {
    decoyCommands[cleaned]();
    return true;
  }
  return false;
};
