document.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("welcomeAudioPlayed")) return;

  const message = "Welcome to Galaxy Beauty Academy. Thanks for choosing our shop.";

  function speak() {
    if (!window.speechSynthesis) return;
if (sessionStorage.getItem("welcomeAudio")) return;

    const msg = new SpeechSynthesisUtterance(message);
    msg.lang = "en-US";
    msg.rate = 0.9;
    msg.pitch = 1.1;

    const voices = speechSynthesis.getVoices();
    const female = voices.find(v =>
      v.name.toLowerCase().includes("female") ||
      v.name.toLowerCase().includes("zira") ||
      v.name.toLowerCase().includes("samantha")
    );

    if (female) msg.voice = female;

    speechSynthesis.cancel();
    speechSynthesis.speak(msg);
    sessionStorage.setItem("welcomeAudio", "true");
  }

  // Try autoplay first
  setTimeout(speak, 500);
  
  // Fallback on user interaction
  document.addEventListener("click", speak, { once: true });
  document.addEventListener("touchstart", speak, { once: true });
});