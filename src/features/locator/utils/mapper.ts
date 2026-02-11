import { ApiResponse, ApiPharmacy } from "../types/api";
import { Region, Pharmacy, Schedule } from "../types/domain";

/*
 * Funcion Principal
 * API al modelo de regiones
 */

export const mapPharmacyData = (response: ApiResponse): Region[] => {
    return response.data.regions.map((reg) => ({
        id: reg.id,
        name: reg.nombre,
        pharmacies: reg.farmacias.map(transformPharmacy)
    }))
};

/* 
* Transformador de entidad
* Api al modelo de dominio
*/

function transformPharmacy(api: ApiPharmacy): Pharmacy {
    return {
        id: api.id,
        slug: api.documentId,
        fullName: `Xana La ${api.nombre}`,
        address: api.direccion,
        googleMapsUrl: api.gmap,
        schedules: parseSchedules(api.horario)
    }
}

/* Utilidad de dominio
* Procesa string sucio de horarios 
*/

function parseSchedules(rawHorario: string): Schedule[] {
    const parts = rawHorario.split("|");
    return parts.map(part => {
        const [label, ...timeParts] = part.split(':');

        return {
            label: label?.trim() || "Horario",
            time: timeParts.join(':').trim() || "No disponible"
        }
    })
}