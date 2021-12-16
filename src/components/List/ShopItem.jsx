import React, {useState} from 'react'
import style from './list.css'

export const ShopItem = ({ id, snack, cart, freshSnack, setFreshSnack, handleCart, handleEdit, handleBanish }) => {
    const [edit, setEdit] = useState(false);

    const handleEditMode = (snack) => {
        setFreshSnack(snack)
        setEdit(true)
    }

    const editSnack = () => {
        handleEdit(id)
        setEdit(false)
    }

    return (
        <article>
            {
                !edit ? 
                <>
                    <label className={style.cart} htmlFor='cart'>
                        <input 
                            type='checkbox' 
                            id='cart' 
                            name='cart'
                            value={cart} 
                            onClick={() => handleCart(id)}/>   
                    </label> 
                    <p className={cart ? style.yes : null}>{snack}</p>
                    <div className={style.buttonWrapper}>
                        <button onClick={() => handleEditMode(snack)}>edit</button>
                        <button onClick={() => handleBanish(id)}>banish</button>
                    </div>
                </> 
                : 
                <form onSubmit={editSnack}>
                    <label htmlFor='editSnack'>
                        <input 
                            type='text'
                            id='editSnack'
                            name='edit snack'
                            defaultValue={freshSnack}
                            onChange={(e) => setFreshSnack(e.target.value)}
                        />
                    </label>
                    <button type='submit'>*save fresh snack*</button>
                </form>
            }            
        </article>
    )
}
