import React from 'react'
import { ShopItem } from './ShopItem.jsx'
import style from './list.css'

export const ShopList = ({ snacks, freshSnack, setFreshSnack, handleCart, handleEdit, handleBanish }) => {
    return (
        <ul>
            {
                snacks.map((snack) => (
                    <li key={snack.id}>
                        <ShopItem 
                            {...snack}
                            freshSnack={freshSnack}
                            setFreshSnack={setFreshSnack}
                            handleCart={handleCart}
                            handleEdit={handleEdit}
                            handleBanish={handleBanish}
                        /> 
                    </li>
                ))
            }
        </ul>
    )
}
