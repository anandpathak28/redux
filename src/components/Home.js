import React from 'react'
import cart from '../images/cart.png'

const Home = () => {

    function handleSubmit() {
        alert("He this is there..");
    }

    return (
        <div>
        <div className="addToCart">
            <img src={cart} />
        </div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src='https://m.media-amazon.com/images/I/41eW+ZpbDTL._AC_UF226,226_FMjpg_.jpg' />
                </div>
                <div className='disco item'>
                    <span>
                        Google Pixel 5
                    </span>
                    <span>
                        Price: $ 800
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button type='submit' onClick={handleSubmit}>Add To Cart</button>
                </div>

            </div>
        </div>
    )
}

export default Home
