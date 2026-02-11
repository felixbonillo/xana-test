import { useEffect } from "react";
import { Region } from "../types/domain";
import { useLocatorStore } from "../store/useLocatorStore";

/**
 * Hook de infraestructura encargado de establecer la región inicial.
 *
 */
export const useLocatorHydration = (regions: Region[] | undefined) => {
    const selectedRegionId = useLocatorStore((state) => state.selectedRegionId);
    const { setRegion } = useLocatorStore((state) => state.actions);

    useEffect(() => {
        // Zero-Inference: Solo hidratamos si hay datos y no hay selección previa
        if (regions && regions.length > 0 && !selectedRegionId) {
            setRegion(regions[1].id);
        }
    }, [regions, selectedRegionId, setRegion]);
};