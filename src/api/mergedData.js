import { getItemsByOrderId, deleteItem } from './itemData';
import { deleteOrder } from './orderData';

const deleteOrderItemRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getItemsByOrderId(firebaseKey).then((orderItemsArray) => {
    const deleteItemPromises = orderItemsArray.map((item) => deleteItem(item.firebaseKey));

    Promise.all(deleteItemPromises).then(() => {
      deleteOrder(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export default deleteOrderItemRelationship;
