import coin1 from "../../src/assets/img/coins/bitcoin-btc-logo.png"
import coin2 from "../../src/assets/img/coins/3.svg"
import coin3 from "../../src/assets/img/coins/4.svg"
import coin4 from "../../src/assets/img/coins/2.svg"

export const convertWalletData = (filteredCoin, coin) => {

    const wallet = {
        owner: "",
        coin,
        vhs_power: 0,
        deposit_income: 0,
        img: "",
        system: ""
    }

    switch (coin) {
        case "BTC":
            wallet.img = coin1
            wallet.system = 11
            break
        case "LTC":
            wallet.img = coin2
            wallet.system = 14
            break
        case "TRX":
            wallet.img = coin3
            wallet.system = 27
            break
        case "DOGE":
            wallet.img = coin4
            wallet.system = 15
            break
    }

    for (let i = 0; i < filteredCoin.length; i++) {
        wallet.owner = filteredCoin[i].owner
        wallet.vhs_power += filteredCoin[i].vhs_power
        wallet.deposit_income += filteredCoin[i].deposit_income
    }

    return {
        owner: wallet.owner,
        coin: wallet.coin,
        vhs_power: wallet.vhs_power,
        deposit_income: wallet.deposit_income,
        img: wallet.img,
        system: wallet.system
    }
}