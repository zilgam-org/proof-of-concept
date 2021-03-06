const {BN, Long, bytes, units} = require('@zilliqa-js/util');
const {Zilliqa} = require('@zilliqa-js/zilliqa');
const {
    toBech32Address,
    getAddressFromPrivateKey,
} = require('@zilliqa-js/crypto');


async function main() {
    const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');
    const CHAIN_ID = 333;
    const MSG_VERSION = 1;
    const VERSION = bytes.pack(CHAIN_ID, MSG_VERSION);
    // privkey = '07e0b1d1870a0ba1b60311323cb9c198d6f6193b2219381c189afab3f5ac41a9';
    // zilliqa.wallet.addByPrivateKey(
    //     privkey
    // );
    // const address = getAddressFromPrivateKey(privkey);
    const address = "";
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

main();