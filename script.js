// Heart Counter Section
const heartIcons = document.querySelectorAll('#heartIcons');
const heartDisplay = document.getElementById('heart');
let count = 0;
for (const icon of heartIcons) {
  icon.addEventListener('click', () => {
    count++;
    heartDisplay.innerText = count;
  });
}
// Copy Btn Section 
const displayCopy = document.getElementById('displayCopy');
const copyBtns = document.querySelectorAll('.copy-btn');
let copyCount = 0;

for (const btn of copyBtns) {
  btn.addEventListener('click', function () {
    const card = btn.closest('.card');

    const serviceNmbr = card.querySelector('.service-number');
    const numberText = serviceNmbr.textContent.trim();

    const textarea = document.createElement('textarea');
    textarea.value = numberText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Copied One');
    copyCount++;
    displayCopy.innerText = copyCount;
  });
}

// Call Btn  Section
const callButtons = document.querySelectorAll('.call-btn');
const historyDiv = document.getElementById('callHistory');
const displayCoins = document.getElementById('coins');
const clearBtn = document.getElementById('clearBtn');
let coinCount = 100;

for (const btn of callButtons) {
  btn.addEventListener('click', function () {
    if (coinCount < 20) {
      alert("Not enough coins to make a call!");
      return;
    }
    coinCount -= 20;
    displayCoins.innerText = coinCount;
    const card = btn.closest('.card');
    const name = card.querySelector('.service-name');
    const number = card.querySelector('.service-number');
    const serviceName = name.textContent.trim();
    const serviceNumber = number.textContent.trim();
    alert("Calling " + serviceName + " (" + serviceNumber + ")");
    // Time Section
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    // Appending Section for Call History
    const historyItem = document.createElement("div");
    historyItem.className = " w-full flex justify-between items-center p-4 gap-4 border border-neutral-300 rounded-xl shadow-sm";
    historyItem.innerHTML = `
        <div>
          <h1>${serviceName}</h1>
          <p>${serviceNumber}</p>
        </div>
        <div>
          <h1>${timeString}</h1>
        </div>
      `;
    historyDiv.append(historyItem);
  });
}
// clear btn section
clearBtn.addEventListener('click', function () {
  historyDiv.innerHTML = "";

})
