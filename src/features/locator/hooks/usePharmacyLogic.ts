import { useMemo } from "react";
import { useLocatorStore } from "../store/useLocatorStore";
import { getRegionSearchUrl } from "../utils/google-maps";
import { Region } from "../types/domain";

export const usePharmacyLogic = (regions: Region[] | undefined) => {
    const { selectedRegionId, currentPage, itemsPerPage } = useLocatorStore();

    // región activa
    const activeRegion = useMemo(() =>
        regions?.find(r => r.id === selectedRegionId),
        [regions, selectedRegionId]
    );


    const { visiblePharmacies, totalPharmacies } = useMemo(() => {
        const list = activeRegion?.pharmacies ?? [];
        const start = currentPage * itemsPerPage;
        return {
            visiblePharmacies: list.slice(start, start + itemsPerPage),
            totalPharmacies: list.length
        };
    }, [activeRegion, currentPage, itemsPerPage]);

    //  URL de búsqueda
    const searchUrl = useMemo(() =>
        getRegionSearchUrl(activeRegion?.name),
        [activeRegion?.name]
    );

    return {
        visiblePharmacies,
        totalPharmacies,
        searchUrl
    };
};