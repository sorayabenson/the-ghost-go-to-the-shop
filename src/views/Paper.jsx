import React, { useReducer, useState } from 'react'
import { Form } from '../components/Form/Form.jsx'
import { ShopList } from '../components/List/ShopList.jsx'

const initialValue = [];

function snacksReducer(snacks, action) {
    const { type, id, snack } = action
    switch(type) {
        case 'add': {
            return [
                ...snacks,
                {
                    id: snacks.length,
                    snack,
                    cart: false 
                }
            ];
        }
        case 'edit': {
            return snacks.map(item => {
                if(item.id === id) {
                    return {
                        id,
                        snack,
                        cart: false
                    }
                } else {
                    return item
                }
            })
        }
        case 'cart': {
            console.log('cart')
            break;
        }
        case 'banish': {
            console.log('banish')
            break;
        }
        default: {
            throw Error(`yikes! keep your sheet on, this ${type} does not exist.`)
        }
    }
}

export default function Paper() {
    const [snack, setSnack] = useState('')
    const [freshSnack, setFreshSnack] = useState('')
    const [edit, setEdit] = useState(false);
    const [snacks, dispatch] = useReducer(snacksReducer, initialValue)

    const addSnack = (e) => {
        e.preventDefault();
        dispatch({
            type: 'add',
            snack
        })
        setSnack('')
    }

    const editSnack = (id) => {
        dispatch({
            type: 'edit',
            id,
            snack: freshSnack
        })
        setFreshSnack('')
    }

    const cartSnack = () => {
        dispatch({
            type: 'cart'
        })
    }

    const banishSnack = () => {
        dispatch({
            type: 'banish'
        })
    }


    return (
        <main>
           <Form snack={snack} handleAddSnack={addSnack} setSnack={setSnack}/>
           {
               snacks ? <ShopList 
                    snacks={snacks}
                    freshSnack={freshSnack}
                    setFreshSnack={setFreshSnack}
                    handleCart={cartSnack}
                    handleEdit={editSnack}
                    handleBanish={banishSnack}
                /> 
               : <p>omg, where are all the snacks?</p>
           }
        </main>
    )
}
