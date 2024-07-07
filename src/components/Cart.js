import { useDispatch, useSelector } from 'react-redux';
import vegIocn from '../img/veg-icon.png';
import MenuItems from "./MenuItems";
import { clearCart } from '../utils/cartSlice';


const cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch()
    const handleRemovedItems = () =>{
        dispatch(clearCart(cartItems));
    }
    return (
        <section className="cartsec py-5 mt-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                <h1 className="theme-color-primary text-5xl text-center mb-5 font-bold">Cart</h1>
                <button className="bg-red-700 text-white text-2xl text-center px-4 py-3 rounded-md" 
                onClick={()=>handleRemovedItems(cartItems)}>Clear Cart</button>
                </div>
                
                <div className="row">
                    <div className="col-md-7">
                        {/* <div className="cartdetails shadow-md p-4">	
                            <div className="itemimg">
                                
                            </div>
                            <div className="itemdetails">
                                <h3 className="title">Pizza Hut</h3>
                                <p className="location">Alipore</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-start align-items-center">
                                        <img src={vegIocn} alt='veg icon' className='w-10 mr-1'/>
                                        <h5>Veggie Supreme</h5>
                                    </div>
                                    <p><i className="bi bi-currency-rupee"></i> 379</p>
                                </div>
                            </div>
                        </div> */}
                        <div className='resmenuwrapper p-0'>
                            <div className="cartdetails shadow-md p-4 menuitems">
                                {cartItems.length === 0 ? <h1 className="text-center w-100">Your cart is empty</h1>: <MenuItems data={cartItems} />}
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-5">
                        <div className="userdetials shadow-md p-4">
                            <h2>User Details</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default cart;