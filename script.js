let loveIcons = document.querySelectorAll(".card-love");
let loveCounter = document.getElementById('lovecounter')
let loveCount = 0;


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

        alert(`📞 calling ${serviceName} at ${serviceNumber}...`)
    })
})