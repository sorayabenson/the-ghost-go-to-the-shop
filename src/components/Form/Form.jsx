import React from 'react'
import style from './form.css'

export const Form = ({ snack, handleAddSnack, setSnack }) => {
    return (
        <form onSubmit={handleAddSnack}>
            <label htmlFor='snack'>
                <h3>it's snack time</h3>
                <input 
                    type='text'
                    id='snack'
                    name='snack'
                    value={snack}
                    placeholder='snack'
                    onChange={(e) => setSnack(e.target.value)}
                />
            </label>
            <button>*add snack*</button>
        </form>
    )
}
