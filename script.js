import { insults } from "./data.js";
import { compliments } from "./data.js";
import { conversationBombshells } from "./data.js";

function insultFunction() {
  const idx = Math.floor(Math.random() * insults.length);
  const insult = insults[idx];
  const out = document.getElementById("insult");
  if (out) out.textContent = insult;
}

function complimentFunction() {
  const idx = Math.floor(Math.random() * compliments.length);
  const compliment = compliments[idx];
  const out = document.getElementById("compliment");
  if (out) out.textContent = compliment;
}

function bombshellFunction() {
  const idx = Math.floor(Math.random() * conversationBombshells.length);
  const conversationBombshell = conversationBombshells[idx];
  const out = document.getElementById("bombshell");
  if (out) out.textContent = conversationBombshell;
}

// expose function to global scope so inline onclick can call it
window.insultFunction = insultFunction;
window.complimentFunction = complimentFunction;
window.bombshellFunction = bombshellFunction;
