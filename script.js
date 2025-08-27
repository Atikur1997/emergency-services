let loveIcons = document.querySelectorAll(".card-love");
let loveCounter = document.getElementById('lovecounter')
let loveCount = 0;
let callHistory = []




// for coin counting 
let coinElement = document.getElementById('coinAmount')
let coinAmount = parseInt(coinElement.innerText);


// love counter starts here

loveIcons.forEach((icon) => {

    icon.addEventListener('click', () => {
        icon.classList.toggle('text-red-500');
        icon.classList.toggle('fa-solid');

        loveCount = 0;
        loveIcons.forEach((ic) => {
            if (ic.classList.contains('fa-solid') && ic.classList.contains('text-red-500')) {
                loveCount++;
            }
        })

        loveCounter.innerText = loveCount
    })
});


// call functionality starts here

let callbtn = document.querySelectorAll('.card-call')


callbtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let parent = btn.parentNode.parentNode
        let serviceName = parent.querySelector('.service-name').innerText;
        let serviceNumber = parent.querySelector('.service-number').innerText;


        if (coinAmount >= 20) {
            alert(`📞 calling ${serviceName} at ${serviceNumber}...`)
            coinAmount = coinAmount - 20;
            coinElement.innerText = coinAmount
        }
        else {
            alert('❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে')
        }

        // call history starts here

        let callList = {
            serviceName: serviceName,
            serviceNumber: serviceNumber,
            time: new Date().toLocaleTimeString()
        }

        callHistory.push(callList)

        let rightDown = document.querySelector('.right .right-down')
        rightDown.innerHTML = ''

        for (let call of callHistory) {
            const div = document.createElement('div')
            div.innerHTML = `
             <div class ="flex justify-between items-center my-3 bg-[#FAFAFA] rounded-md py-4 px-3">
             <div>
                    <h1>${call.serviceName}</h1>
                    <p>${call.serviceNumber}</p>
                </div>
                <div>
                    ${call.time}
                </div>
             </div>
            `
            rightDown.appendChild(div)
        }


    })

})

// clear button work starts here 
let clearBtn = document.getElementById('clearBtn')
clearBtn.addEventListener('click', () => {
    let rightDown = document.querySelector('.right .right-down')
    rightDown.innerHTML = ''
    callHistory = []
})

//copy button work starts here

let copyBtn = document.querySelectorAll('.copyBtn')
let copyCountElement = document.getElementById('copyCounter');
let copyCount = parseInt(copyCountElement.innerText)

copyBtn.forEach((cp) => {
    cp.addEventListener("click", () => {
        let parent = cp.parentNode.parentNode
        let serviceNumber = parent.querySelector('.service-number').innerText;

        alert(`নম্বর কপি হয়েছেঃ ${serviceNumber}`)
        copyCount++
        copyCountElement.innerText = copyCount
        navigator.clipboard.writeText(serviceNumber)

    })
})