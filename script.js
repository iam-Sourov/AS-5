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
// Heart Counter Section
const CopyBtns = document.querySelectorAll("#copy-btn");
const counterCopy = document.getElementById('DisplayCopy');
let CopyCount = 0;

for (const btn of CopyBtns) {
    btn.addEventListener('click', function () {
        alert("Copied One")
        CopyCount++;
        counterCopy.innerText = CopyCount;
    })
}

// Call Btn Section

// const coinCountElement = document.getElementById('coins');
// const callButton = document.querySelectorAll('#call-btn');
// const serviceNameElement = document.querySelector('.service-name');
// const serviceNumberElement = document.querySelector('.service-number');
// const callHistoryList = document.getElementById('call-history');
