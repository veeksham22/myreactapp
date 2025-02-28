import PropTypes from 'prop-types';
function List(props){
    const category=props.category;
    const itemList=props.items;
    const listitems =itemList.map(item => <li> {item.name}:
                             calories={item.calories}</li>);
    return (<><ol className="items">{listitems}</ol>
    <h3 className="category">{category}</h3></>);
}
List.defaultProps={
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({ id:PropTypes.number,
                                            name: PropTypes.string,
                                         calories:PropTypes.number,
    }))
}
List.defaultProps={
        category: 'Default Category',
        items: [],
    }

export default List