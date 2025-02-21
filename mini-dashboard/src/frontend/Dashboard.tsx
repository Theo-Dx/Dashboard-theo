import React from 'react';
import NetworkInfo from './NetworkInfo';
import Logs from './Logs';

const Dashboard: React.FC = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Mini Dashboard</h1>
            <NetworkInfo />
            <Logs />
        </div>
    );
};
export default Dashboard;