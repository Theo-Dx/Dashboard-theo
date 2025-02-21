#!/bin/bash

ip_locale="127.0.0.1/8"
ip_reseau=$(ip -4 addr show | awk '/inet/ && !/127.0.0.1/ {print $2; exit}')
ip_publique=$(curl -s https://api64.ipify.org || echo "Non disponible")

ram_totale=$(free -h | awk '/Mem:/ {print $2}')
ram_disponible=$(free -h | awk '/Mem:/ {print $7}')
utlisation_ram=$(free | awk '/Mem:/ {printf "%.0f", $3/$2 * 100}')

echo "Adresse IP interface lo : $ip_locale"
echo "Adresse IP interface eth0 : ${ip_reseau:-Non disponible}"
echo "Adresse IP publique : $ip_publique"
echo "RAM totale : $ram_totale"
echo "RAM disponible : $ram_disponible"
echo "Utilisation de la RAM : $utlisation_ram%"

