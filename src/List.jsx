function List(){
    const fruits = ['Apples', 'Oranges','Banana', 'Coconut', 'Pineapple' ];

    // Converting array of string into an array of list item elements
    const listItems = fruits.map(fruit => <li>{fruit}</li>);
    return(<ul>{listItems}</ul>);
}

export default List;