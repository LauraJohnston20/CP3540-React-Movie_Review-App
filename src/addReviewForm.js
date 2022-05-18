import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, FormText } from 'react-bootstrap';

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
        <form className="pt-3 container-md border border-dark" onSubmit={submit} style={{textAlign:"left", marginTop:"50px"}}>
        <div>
            <label className="form-label fw-bold">Movie Title:</label>
            <input className="form-control" onChange = {evt => setName(evt.target.value)}
                type="text" id="name" name="name" required />
        </div>
        <br></br>

        <div>
            <label className="form-label fw-bold">Release Date:</label>
            <input className="form-control" onChange = {evt => setDate(evt.target.value)}
                type="date" id="date" name="date" required />
        </div>
        <br></br>
        
        <div className="mb-4">
            <label className="form-label fw-bold">Starring:</label>
            <input className="form-control" onChange = {evt => setActors(evt.target.value)}
                type="text" id="actors" name="actors" required />
            <FormText>Please separate actors with a comma and space.</FormText>
        </div>

        <div className="mb-4">
            <label className="form-label fw-bold" >Poster:</label>
            <input className="form-control" onChange={evt => {setPoster(URL.createObjectURL(evt.target.files[0]))}} 
                type="file" id="poster" name="poster" accept=".png, .jfif, .jpg, .jpeg" required />
        </div>

        <div className="mb-4">
            <label className="form-label fw-bold">Rating:</label>   
            <div>    
            <select onChange = {evt => setRating(evt.target.value)} 
                id="rating" name="rating" required>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
             </select>
             </div>   
        </div>
             <div style={{textAlign:"center"}}>
             <Button variant="primary" type="submit" value="Submit">Submit Review</Button>
        </div>
        <br></br>
    </form>
        )
    }