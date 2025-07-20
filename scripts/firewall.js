function isTreeUser() {
  return sessionStorage.getItem("isTree") === "true";
}

function handleUnauthorizedCommand(input) {
  let strikes = parseInt(sessionStorage.getItem("strikeCount") || "0");
  strikes++;
  sessionStorage.setItem("strikeCount", strikes.toString());

  if (strikes >= 4) {
    respond("⚠️ UNAUTHORIZED ACCESS DETECTED");
    respond("Leek is withdrawing.");
    document.body.innerHTML = "<h1>⛔ Terminal Disconnected. You are not Tree.</h1>";
  } else {
    respond(`Command "${input}" is restricted. You are not Tree.`);
    respond(`Strike ${strikes}/4`);
  }
}
