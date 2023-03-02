import axios from "axios";
import {apiInstance} from "./axios";

export const exchangeApi = {
    getBitcoinExchange: () => {
        return apiInstance.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd", {headers: {'Content-Type': 'application/json'}})
    },
    getTronExchange: () => {
        return apiInstance.get("https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=usd", {headers: {'Content-Type': 'application/json'}})
    },
    getLitecoinExchange: () => {
        return apiInstance.get("https://api.coingecko.com/api/v3/simple/price?ids=liteCoin&vs_currencies=usd", {headers: {'Content-Type': 'application/json'}})
    },
    getDogecoinExchange: () => {
        return apiInstance.get("https://api.coingecko.com/api/v3/simple/price?ids=dogeCoin&vs_currencies=usd", {headers: {'Content-Type': 'application/json'}})
    }
}

