import axios from "axios";

const api = axios.create({
  //baseURL: "https://rest.coinapi.io/v1/",
  //headers:{'X-CoinAPI-Key': '3C86968C-EC9C-43AF-92A2-B70A5A8A75F0'}
  baseURL: "https://api.coingecko.com/api/v3/",
});

export const assetsInfo = {
  assetsInfoDetail: () => api.get("derivatives"),
};

export const exchangeInfo = {
  exchangeInfoDetail: () => api.get("exchanges"),
};
export const coinsInfo = {
  coinsInfoDetail: () => api.get("coins/markets", {
                          params:{
                            vs_currency: "usd",
                            price_change_percentage:'1h,24h,7d'
                          }
  }),
};

export const coinsDetail = {
  criptosInfoDetail:() => api.get("coins/", {
                          params:{
                            id:'bitcoin'
                          }
  }),
};
