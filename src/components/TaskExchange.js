import React, { useState } from 'react';

const TaskExchange = () => {
    const [task, setTask] = useState('');
    const [service, setService] = useState('');
    const [trades, setTrades] = useState([]);

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    };

    const handleServiceChange = (e) => {
        setService(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task && service) {
            setTrades([...trades, { task, service }]);
            setTask('');
            setService('');
        }
    };

    return (
        <div>
            <h2>Task Exchange</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Task:</label>
                    <input type="text" value={task} onChange={handleTaskChange} required />
                </div>
                <div>
                    <label>Service Offered:</label>
                    <input type="text" value={service} onChange={handleServiceChange} required />
                </div>
                <button type="submit">Post Task</button>
            </form>
            <h3>Completed Trades</h3>
            <ul>
                {trades.map((trade, index) => (
                    <li key={index}>
                        Task: {trade.task} - Service: {trade.service}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskExchange;