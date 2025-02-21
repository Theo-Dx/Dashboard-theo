import React, { useEffect, useState } from 'react';
import { getNetworkInfo } from '../services/api';

type NetworkInfo = {
    ip: string;
    mac: string;
    status: string;
};

const NetworkInfo: React.FC = () => {
    const [info, setInfo] = useState<NetworkInfo | null>(null);

    useEffect(() => {
        getNetworkInfo().then(setInfo);
    }, []);

    return (
        <div className="p-4 border rounded">
            <h2 className="text-xl font-bold">Informations Réseau</h2>
            {info ? (
                <ul>
                    <li><strong>IP :</strong> {info.ip}</li>
                    <li><strong>MAC :</strong> {info.mac}</li>
                    <li><strong>Statut :</strong> {info.status}</li>
                </ul>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
};
export default NetworkInfo;