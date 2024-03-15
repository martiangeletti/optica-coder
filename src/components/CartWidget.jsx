import cart from '../assets/cart.svg'

const CartWidget = () => {
    return (<><div className= "text-xl flex">
        <img src={cart} alt="Cart" />
        <span className="text-white hover:underline">3</span>
        </div></>);
}

export default CartWidget;