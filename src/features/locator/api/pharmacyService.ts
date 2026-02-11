import { ApiPharmacy } from "../types/api";

/**
 * Fetcher asíncrono. 
 * Apunta al endpoint interno que sirve el JSON .
 */
export const fetchPharmacies = async (): Promise<ApiPharmacy> => {
    const response = await fetch("/app/locations");

    if (!response.ok) {
        throw new Error("Error en la conexión con la API de Farmacia Xana");
    }

    return response.json();
};