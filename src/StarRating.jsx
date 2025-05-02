import React, { useState } from 'react'
import { db } from './firebase';  
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./App.css";

function StarRating({ onSubmit }) {
    const [rating, setRating] = useState(0);
    const [name, setName] = useState(""); 

    function handleClick(star){
        setRating(star);
    }

    async function handleSubmit() {
        if (!name.trim()) {
            alert("Please enter your name.");
            return; 
        }
    
        try {
            await addDoc(collection(db, "ratings-app"), {
                rating,
                name,
                timestamp: serverTimestamp(),
            });
    
            onSubmit(rating);
    
            alert(`You rated this ${rating} star${rating > 1 ? "s" : ""}!`);
    
            setName("");
        } catch (error) {
            console.error("Error submitting rating: ", error);
            alert("Something went wrong, please try again.");
        }
    }
    

    return (
        <div className="rating-box">
            <h2>
                Please enter your rating:
            </h2>
            <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={star <= rating ? "star filled" : "star"}
                        onClick={() => handleClick(star)}
                    >
                        ⭐
                    </span>
                ))}
            </div>
            <input 
                type="text" 
                placeholder="Your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
            />
            <button onClick={handleSubmit}>Submit Rating</button>
        </div>
    );
};

export default StarRating;
