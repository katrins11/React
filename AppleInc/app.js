const products = [
    {
        id: 1,
        image: "assets/Beats.png",
        title: "BeatsX Earphones",
        text: "Hide when you have to. Strike when you want to. Stay undefeated with the latest Beats Collection. As two brands that believe in pushing boundaries and taking a stand.",
        price: "$180" 
    },
    {
        id: 2,
        image: "assets/Beats.png",
        title: "BeatsX 1",
        text: "Hide when you have to. S brands that believe in pushing boundaries and taking a stand.",
        price: "$80" 
    },
    {
        id: 3,
        image: "assets/Beats.png",
        title: "BeatsX 55",
        text: "Hide when you have to. S brands that believe in pushing boundaries and taking a stand.",
        price: "$2040" 
    },

]

const ProductODD = (props) => {
    return (
        <div className="product">
            <div className="product-header">
                <img src={props.image} alt="" />
                <h2>{ props.title }</h2>
            </div>
            <div className="product-info">
                <p>{ props.text }</p>
                <h3>{ props.price }</h3>
                <ul>
                    <li><a href="">buy</a></li>
                    <li><a href="">edit</a></li>
                    <li><a href="">delete</a></li>
                </ul>
            </div>
        </div> 
    )
}

const App = (props) => {
    return (
        <div className="products">
            {props.productList.map(product =>
                <ProductODD 
                    key={product.id.toString()}
                    image={product.image}
                    title={product.title}
                    text={product.text}
                    price={product.price}
                />
            )}
            
        </div>
        
    );
}

ReactDOM.render(
    <App productList={products}/>,
    document.getElementById('app')
);