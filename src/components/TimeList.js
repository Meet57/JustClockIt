import React, { useState, useEffect } from 'react'
import firebase from '../firebase';

function useTimes() {
    const [times, setTimes] = useState([])

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection('times')
        .onSnapshot((snapshot) => {
            const newTimes = snapshot.docs.map((doc) => ({
                id : doc.id,
                ...doc.data()
            }))

            console.log('newTimes', newTimes)
            setTimes(newTimes)
        })

        return () => unsubscribe()
    },[])

    return times
}

export const TimeList = () => {
    
    const times = useTimes()

    const deleteFirebase = (id) => {
        firebase.firestore().collection('times').doc(id).delete()
    }

    return (
        <div className="timelist">
            <h2>Times List</h2>
            <ol>
                {times.map((time) => 
                    <li key={time.id}>
                        <div className="time-entry">
                            {time.title}
                            <code className="time"> - {time.time_seconds} sec</code>
                        </div>
                        <div>
                            <button id="delete" onClick={() => deleteFirebase(time.id)} style={{float : 'right'}}>Delete</button>
                        </div>
                    </li>
                )}
            </ol>
        </div>
    )
}
