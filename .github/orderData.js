import client from "../src/scripts/utils/client";

const endpoint = client.databaseURL;

const getOrders = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(Object.values(data));
      console.warn(Object.values(data));
    })
    .catch(reject);
});

export default getOrders;
