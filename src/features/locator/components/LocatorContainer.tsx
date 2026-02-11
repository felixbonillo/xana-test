"use client";

import { usePharmacyLocator } from "../hooks/usePharmacyLocator";
import { usePharmacyLogic } from "../hooks/usePharmacyLogic";
import { useLocatorHydration } from "../hooks/useLocatorHydration";
import { useLocatorStore } from "../store/useLocatorStore";
import { LocatorSkeleton } from "./LocatorSkeleton";
import { LocatorHeader } from "./LocatorHeader";
import { RegionSelector } from "./RegionSelector";
import { PharmacyCard } from "./PharmacyCard";
import { MainCTA } from "@/shared/components/ui/PrimaryButton";
import { PaginationControls } from "./PaginationControls";

export const LocatorContainer = () => {
    // 1. Store: Estado persistente
    const selectedRegionId = useLocatorStore((state) => state.selectedRegionId);
    const { actions } = useLocatorStore();

    // 2. Fetching: Datos del servidor
    const { data: regions, isLoading, isError } = usePharmacyLocator();

    // 3. HIDRATACIÓN:
    useLocatorHydration(regions);

    // 4. Lógica: Paginación y URL de Google Maps
    const { visiblePharmacies, totalPharmacies, searchUrl } = usePharmacyLogic(regions);

    if (isLoading) return <LocatorSkeleton />;
    if (isError) return <div className="text-center py-20 text-red-600">Error de conexión con la API.</div>;

    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-12">
            {/* Título de 64px */}
            <LocatorHeader />

            <div className="mb-16">
                <RegionSelector
                    regions={regions ?? []}
                    activeId={selectedRegionId}
                    onChange={actions.setRegion}
                />
            </div>

            {/* Grid responsivo: 1 col (Móvil), 2 cols (iPad), 3 cols (Desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16 min-h-105">
                {visiblePharmacies.map((pharmacy) => (
                    <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
                ))}
            </div>

            {/* Footer: Acción central y navegación lateral */}
            <footer className="relative mt-12 lg:mt-20 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-0">
                <div className="z-10 w-full md:w-auto flex justify-center">
                    <MainCTA url={searchUrl} text="Ver direcciones" />
                </div>
                <div className="hidden lg:flex lg:absolute lg:right-0 items-center">
                    <PaginationControls totalItems={totalPharmacies} />
                </div>
            </footer>
        </section>
    );
};