import { useQuery } from "@tanstack/react-query";
import { ApiResponse } from "../types/api";
import { mapPharmacyData } from "../utils/mapper";
import { Region } from "../types/domain";


export const usePharmacyLocator = () => {
    return useQuery<ApiResponse, Error, Region[]>({
        queryKey: ["pharmacies-locator"],
        queryFn: async () => {
            const res = await fetch("/api/locations");
            return res.json();
        },
        select: (data) => mapPharmacyData(data),
    });
};