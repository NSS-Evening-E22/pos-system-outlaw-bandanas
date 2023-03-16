import client from '../utils/client';

const endpoint = client.databaseURL;

// ### GET VOCABULARY ITEMS FROM DB BY UID
const getItems = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/items.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(Object.values(data));
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });

  export default getItems;
