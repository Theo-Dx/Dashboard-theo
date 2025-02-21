import React, { useEffect, useState } from 'react';
import { getLogs } from '../services/api';

const Logs: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        const fetchLogs = () => {
            getLogs().then(setLogs);
        };
        fetchLogs();
        const interval = setInterval(fetchLogs, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-4 border rounded mt-4">
            <h2 className="text-xl font-bold">Logs</h2>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log}</li>
                ))}
            </ul>
        </div>
    );
};
export default Logs;