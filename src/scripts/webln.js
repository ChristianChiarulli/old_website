document.addEventListener("DOMContentLoaded", async () => {
  console.log("Connection Cached");
  async function connect() {
    const connected = localStorage.getItem("connected");
    if (connected === "true") {
      const enabled = await window.webln.enable();
      console.log(enabled);
      document.querySelector(".connect-button").classList.toggle("hidden");
      document.querySelector(".tip-button").classList.toggle("tip-enabled");
    }
  }

  await connect();
});

document
  .querySelector(".connect-button")
  .addEventListener("click", async () => {
    console.log("Connected to Lightning");
    try {
      if (typeof window.webln !== "undefined") {
        const enabled = await window.webln.enable();

        localStorage.setItem("connected", "true");

        console.log(enabled);

        if (enabled) {
          document.querySelector(".connect-button").classList.toggle("hidden");
          document.querySelector(".tip-button").classList.toggle("tip-enabled");
        }
      }
    } catch (error) {
      // User denied permission or cancelled
      console.log(error);
    }
  });

document.querySelector(".tip-button").addEventListener("click", async () => {
  document.getElementById("myPopup").style.display = "flex";
});

document.getElementById("close-popup").addEventListener("click", async () => {
  document.getElementById("myPopup").style.display = "none";
});

document.querySelector(".send-button").addEventListener("click", async () => {
  const value = document.getElementById("tip-input").value;

  console.log("VALUE:", value);

  const result = await webln.keysend({
    destination:
      "030a58b8653d32b99200a2334cfe913e51dc7d155aa0116c176657a4f1722677a3",
    amount: value,
    customRecords: {
      696969: "nlss9ZMhDfPdeek9Slce",
    },
  });

  document.getElementById("myPopup").style.display = "none";

  console.log("Payment result:", result);
});
