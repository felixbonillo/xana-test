export interface ApiPharmacy {
    id: number;
    documentId: string;
    nombre: string;
    direccion: string;
    numeroTelefono: string;
    horario: string;
    gmap: string;
    direccion_2: string | null;
    direccion_3: string | null;
}

export interface ApiRegion {
    id: number;
    documentId: string;
    nombre: string;
    farmacias: ApiPharmacy[];
}

export interface ApiResponse {
    data: {
        regions: ApiRegion[];
    }
}