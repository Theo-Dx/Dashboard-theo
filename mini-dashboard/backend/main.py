from fastapi import FastAPI
import random

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


NETWORK_INFO = {
    "ip": "192.168.1.100",
    "mac": "00:1A:2B:3C:4D:5E",
    "status": "Online"
}

LOGS = [
    "Service démarré",
    "Connexion réussie",
    "Erreur détectée",
    "Reconnexion au serveur",
    "Opération terminée"
]

@app.get("/network-info")
def get_network_info():
    return NETWORK_INFO

@app.get("/logs")
def get_logs():
    return random.sample(LOGS, len(LOGS))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
