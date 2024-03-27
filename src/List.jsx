function List(){


    // sort items in our lists
    // fruits.sort((a, b) => a.name.localeCompare(b.name));  //Alphabetical
    // fruits.sort((a, b) => a.name.localeCompare(b.name));  //reverse Alphabetical

    // Sorting by calories numeric
    // fruits.sort((a,b) => a.calories -b.calories);  //Numeric order/ascending
    // fruits.sort((a,b) => b.calories -a.calories) //reverse Numeric order/descending

    // using filter method to filter out list items

    // const lowCalFruits = fruits.filter(fruit => fruit.calories<100);  //finding low calorie fruits

    // Converting array of string into an array of list item elements using map method
    const listItems = fruits.map(fruit => <li key = {fruit.id}>
                                                                    {fruit.name}: &nbsp;
                                                                 <b> {fruit.calories}</b>  </li>);
    return(<ol>{listItems}</ol>);

//  converting array os strings to array of abjects.
}

export default List;