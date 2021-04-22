import {addNewItem, deleteItem, getItem, updateItem} from '../controllers/groceryController';

const routes=(app)=>
{
    app.route('/grocery')
    .get(getItem)
    .post(addNewItem);

    app.route('/grocery/:GroceryId')
    .put(updateItem)
    .delete(deleteItem);
}
export default routes