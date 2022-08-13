const DEFAULT_CARD = `0000 0000 0000 0000`
const DEFAULT_NAME = `JANE APPLESEED`
const DEFAULT_EXP = `00/00`
const DEFAULT_CVC = `000`


const cardNumber = document.getElementById('numbers')
const cardExp = document.getElementById('exp')
const cardName = document.getElementById('name')
const cardCVC = document.getElementById('cvc')
const inputName = document.getElementById('inputName')
const inputNumber = document.getElementById('inputNumber')
const inputMM = document.getElementById('MM')
const inputYY = document.getElementById('YY')
const confirmBtn = document.getElementById('confirmBtn')
const afterClick = document.getElementById('afterClick')
const exceptBtn = document.getElementById('exceptBtn')
const inputCVC = document.getElementById('inputCVC')
const btnText = document.getElementById('confirm')

inputName.onkeyup = () => changeCardName(e.target.value)
inputNumber.onkeyup = () => changeCardNumber(e.target.value)
inputMM.onkeyup = () => changeEXP(e.target.value)
inputYY.onkeyup = () => changeEXP(e.target.value)
inputCVC.onkeyup = () => changeCVC(e.target.value)
confirmBtn.onclick = (e) => updateCard()




function changeCardName(e) {   
    cardName.innerHTML = inputName.value.toUpperCase()
    if (inputName.value === ''){
        cardName.innerHTML = DEFAULT_NAME
    }
}

function changeCardNumber(e) {
    cardNumber.innerHTML = `${inputNumber.value.slice(0,4)} ${inputNumber.value.slice(4,8)} ${inputNumber.value.slice(8,12) } ${inputNumber.value.slice(12,16)}`
    if ((inputNumber.value === '') || ((inputNumber.value).length < 16)){
        cardNumber.innerHTML = DEFAULT_CARD
    }
}

function changeEXP(e) {
    cardExp.innerHTML = `${inputMM.value}/${inputYY.value}`
    if ((inputMM.value === '') || ((inputMM.value).length < 2)){
        cardExp.innerHTML = DEFAULT_EXP
        }
}

function changeCVC(e) {
    cardCVC.innerHTML = `${inputCVC.value}`
    if ((inputCVC.value === '') || ((inputCVC.value).length < 3)){
        cardCVC.innerHTML = DEFAULT_CVC
        }
}

function inactiveClass() {
    afterClick.classList.remove("inactive")
    exceptBtn.classList.add("inactive")
    btnText.innerHTML = `Continue`
    

}

function resetPage() {
confirmBtn.classList.add("reload")
let reloadBtn = document.querySelector(".reload")
reloadBtn.addEventListener('click', () => {window.location.reload();})
}

function updateCard () {
    changeCardName()
    changeCardNumber()
    changeEXP()
    changeCVC()
    inactiveClass()
    resetPage()

}