/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/* SMART CONTRACT STUFF*/

const {BN, Long, bytes, units} = require('@zilliqa-js/util');
const {Zilliqa} = require('@zilliqa-js/zilliqa');
const {
    toBech32Address,
    getAddressFromPrivateKey,
} = require('@zilliqa-js/crypto');

async function Bid() {
    const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');
    const CHAIN_ID = 333;
    const MSG_VERSION = 1;
    const VERSION = bytes.pack(CHAIN_ID, MSG_VERSION);
    // privkey = '07e0b1d1870a0ba1b60311323cb9c198d6f6193b2219381c189afab3f5ac41a9';
    // zilliqa.wallet.addByPrivateKey(
    //     privkey
    // );
    const address = window.zilPay.wallet.defaultAccount;
    console.log("Your account address is:");
    console.log(`${address}`);
    const myGasPrice = units.toQa('2000', units.Units.Li); // Gas Price that will be used by all transactions


    const nftAddr = toBech32Address("0x33d5cbdc1bb5f2bb09e2b2522875ed82776cf7c7");
    try {
        const contract = zilliqa.contracts.at(nftAddr);
        const callTx = await contract.callWithoutConfirm(
            'Bid',
            [],
            {
                // amount, gasPrice and gasLimit must be explicitly provided
                version: VERSION,
                amount: new BN(0),
                gasPrice: myGasPrice,
                gasLimit: Long.fromNumber(10000),
            }
        );

        // check the pending status
        const pendingStatus = await zilliqa.blockchain.getPendingTxn(callTx.id);
        console.log(`Pending status is: `);
        console.log(pendingStatus.result);

        // process confirm
        console.log(`The transaction id is:`, callTx.id);
        console.log(`Waiting transaction be confirmed`);
        const confirmedTxn = await callTx.confirm(callTx.id);

        console.log(`The transaction status is:`);
        console.log(JSON.stringify(confirmedTxn.receipt));

    } catch (err) {
        console.log(err);
    }
}

async function Withdraw() {
    const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');
    const CHAIN_ID = 333;
    const MSG_VERSION = 1;
    const VERSION = bytes.pack(CHAIN_ID, MSG_VERSION);
    // privkey = '07e0b1d1870a0ba1b60311323cb9c198d6f6193b2219381c189afab3f5ac41a9';
    // zilliqa.wallet.addByPrivateKey(
    //     privkey
    // );
    // const address = getAddressFromPrivateKey(privkey);
    const address = window.zilPay.wallet.defaultAccount;
    console.log("Your account address is:");
    console.log(`${address}`);
    const myGasPrice = units.toQa('2000', units.Units.Li); // Gas Price that will be used by all transactions


    const nftAddr = toBech32Address("0x33d5cbdc1bb5f2bb09e2b2522875ed82776cf7c7");
    try {
        const contract = zilliqa.contracts.at(nftAddr);
        const callTx = await contract.callWithoutConfirm(
            'Withdraw',
            [],
            {
                // amount, gasPrice and gasLimit must be explicitly provided
                version: VERSION,
                amount: new BN(0),
                gasPrice: myGasPrice,
                gasLimit: Long.fromNumber(10000),
            }
        );

        // check the pending status
        const pendingStatus = await zilliqa.blockchain.getPendingTxn(callTx.id);
        console.log(`Pending status is: `);
        console.log(pendingStatus.result);

        // process confirm
        console.log(`The transaction id is:`, callTx.id);
        console.log(`Waiting transaction be confirmed`);
        const confirmedTxn = await callTx.confirm(callTx.id);

        console.log(`The transaction status is:`);
        console.log(JSON.stringify(confirmedTxn.receipt));

    } catch (err) {
        console.log(err);
    }
}

/* CONNECTING TO ZILPAY*/
function connectZilpay() {
    var btn_text;
    if (typeof window.zilPay !== 'undefined') { 
        console.log("Zilpay detected!"); 

        const zilliqa = window.zilPay;
        const utils = zilPay.utils;

        zilliqa.wallet.connect();

        if (zilliqa.wallet.isEnable){
            btn_text = "ZilPay connected!";
            document.getElementById("zilpay-btn").innerHTML = btn_text;
        }
    }
    else{
        if (window.confirm("You do not have ZilPay. Click 'OK' to download the entension.")) {
            window.location.href = "https://zilpay.io/"
          }
        
    }
};

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.home__data',{delay: 200})
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

// /*SCROLL GALLERY*/
// sr.reveal('.gallery__carousel',{}); 
// sr.reveal('.gallery__text',{}); 
// sr.reveal('.gallery__data',{interval: 200}); 
// sr.reveal('.gallery__img',{delay: 600});

/*SCROLL MY PIECES*/
sr.reveal('.mypieces__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 




