export interface Schedule {
    label: string; //"Lun-Sab"
    time: string; //"7am-7pm"
}

export interface Pharmacy {
    id: number;
    slug: string;
    fullName: string; //"Xana La Carolina"
    address: string;
    schedules: Schedule[]; //.map()
    googleMapsUrl: string;
}

export interface Region {
    id: number;
    name: string;
    pharmacies: Pharmacy[]
}

