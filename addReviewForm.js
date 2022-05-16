import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function AddReviewForm({onAddReview = f => f}) {

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [actors, setActors] = useState([]);
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();

    const submit = evt => {
        evt.preventDefault();

        onAddReview(name, date, actors.split(", "), poster, rating);
        navigate('/');
    }

    return (
        <form onSubmit={submit}>
           <div>
                <label>Movie Name:</label>
                <input onChange={evt => setName(evt.target.value)}
                    type="text" id="name" name="name" required />
            </div>

            <div>
                <label>Release Date:</label>
                <input onChange={evt => setDate(evt.target.value)}
                    type="date" id="date" name="date" required />
            </div>

            <div>
                <label>Starring:</label>
                <input onChange={evt => setActors(evt.target.value)}
                    type="text" id="actors" name="actors" required />
            </div>

            <div>
                <label>Poster:</label>
                <input onChange={evt => {setPoster(URL.createObjectURL(evt.target.files[0])); console.log(URL.createObjectURL(evt.target.files[0]))}} 
                    type="file" id="poster" name="poster" accept=".png,.jpg,.jpeg" required />
            </div>

            <div>
                <label>Rating:</label>
                <select onChange={evt => setRating(evt.target.value)}
                    id="rating" name="rating" required>
                    
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div>
                <button type="submit" value="Submit">Submit Review</button>
            </div>
        </form>
    )

}