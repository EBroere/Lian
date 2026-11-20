// JavaScript

fetch("instagram.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Instagram HTML kon niet worden geladen");
    }
    return response.text();
  })
  .then((html) => {
    document.getElementById("instagram-container").innerHTML = html;

    const instagramScript = document.createElement("script");
    instagramScript.src = "https://www.instagram.com/embed.js";
    instagramScript.async = true;

    instagramScript.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    document.body.appendChild(instagramScript);
  })
  .catch((error) => console.error(error));
