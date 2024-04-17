import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css'
function Home() {
    const [roomCode,setRoomCode] = useState("");
    const navigate =useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/room/${roomCode}`);
    }
    return (
        <div className="home">
        <h1 className="heading">Welcome to the Video Room!</h1>
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="room-code" className="label">Enter Room Code:</label>
            <input
                type="text"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                required
                placeholder='Enter the room code you want to join'
                className="input"
            />
            <button type='submit' className="button">Enter Room</button>
        </form>

    </div>
    )
}

export default Home
