import React, { useState } from 'react'
import firebase from '../firebase';

export const AddTimeEntryForm = () => {

    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')  

    const onSubmit = (e) => {
        e.preventDefault()
        firebase.firestore().collection('times').add({
            title,
            time_seconds: parseInt(time)
        })

        setTime('')
        setTitle('')
    }

    return (
        <form onSubmit={onSubmit} >
            <h3>Add time entry</h3>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </div>
            <div>
                <label>Time</label>
                <input type="number" value={time} onChange={(e) => setTime(e.target.value)} required/>
            </div>
            <button className="submit">Add Time Entry</button>
        </form>
    )
}
