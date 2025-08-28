// Heart Counter Section
const heartImages = document.querySelectorAll("#CardHeart");
const counterElement = document.getElementById('heart');
let count = 0;
for (const image of heartImages) {

  image.addEventListener('click', () => {
    count++;
    counterElement.innerText = count;
  });
}
// Copy Button Section 
const counterCopy = document.getElementById("DisplayCopy");
const copyButtons = document.querySelectorAll(".copy-btn");
let CopyCount = 0;

copyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const card = button.closest(".card");

    const numberEl = card.querySelector(".service-number");
    const numberText = numberEl.textContent.trim();

    const textarea = document.createElement("textarea");
    textarea.value = numberText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Copied One");
    CopyCount++;
    counterCopy.innerText = CopyCount;
  });
});

const callButtons = document.querySelectorAll('.call-btn');
const historyContainer = document.getElementById('callHistory');
const DisplayCoins = document.getElementById('coins');
let coinCount = 100;
callButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (coinCount < 20) {
      alert("Not enough coins to make a call!");
      return;
    }
    coinCount -= 20;
    DisplayCoins.innerText = coinCount;
    const card = button.closest(".card");
    const nameEl = card.querySelector(".service-name");
    const numberEl = card.querySelector(".service-number");
    const serviceName = nameEl.textContent.trim();
    const numberText = numberEl.textContent.trim();
    alert("Calling " + serviceName + " (" + numberText + ")");
    // Time Section
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    // Appending Section for Call History
    const historyItem = document.createElement("div");
    historyItem.className = "flex justify-between items-center p-4 gap-4 border border-neutral-300 rounded-xl shadow-sm";
    historyItem.innerHTML = `
        <div>
          <h1>${serviceName}</h1>
          <p>${numberText}</p>
        </div>
        <div>
          <h1>${timeString}</h1>
        </div>
      `;
    historyContainer.append(historyItem);
  });
});
