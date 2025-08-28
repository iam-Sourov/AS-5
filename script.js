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
let CopyCount = 0;
const counterCopy = document.getElementById("DisplayCopy"); 

const copyButtons = document.querySelectorAll(".copy-btn");

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

const callButtons = document.querySelectorAll(".call-btn");
const historyContainer = document.getElementById('callHistory');
callButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const card = button.closest(".card");
        const nameEl = card.querySelector(".service-name");
        const numberEl = card.querySelector(".service-number");

        const serviceName = nameEl.textContent.trim();
        const numberText = numberEl.textContent.trim();
        console.log(serviceName);

        const now = new Date();
        const timeString = now.toLocaleTimeString();

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
// Call Btn Section

// const coinCountElement = document.getElementById('coins');
// const callButton = document.querySelectorAll('#call-btn');
// const serviceNameElement = document.querySelector('.service-name');
// const serviceNumberElement = document.querySelector('.service-number');
// const callHistoryList = document.getElementById('call-history');
