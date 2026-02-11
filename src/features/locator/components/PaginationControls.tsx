import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocatorStore } from "../store/useLocatorStore";

export const PaginationControls = ({ totalItems }: { totalItems: number }) => {
    const { currentPage, itemsPerPage, actions } = useLocatorStore();
    const canNext = (currentPage + 1) * itemsPerPage < totalItems;
    const canPrev = currentPage > 0;

    return (
        <div className="flex items-center gap-4 ">
            <button
                onClick={actions.prevPage}
                disabled={!canPrev}
                className="p-3 rounded-full border border-gray-200 text-gray-300 disabled:opacity-20 transition-opacity"
            >
                <ChevronLeft size={28} />
            </button>
            <button
                onClick={actions.nextPage}
                disabled={!canNext}
                className="p-3 rounded-full bg-xana-blue text-white shadow-lg disabled:bg-gray-200 transition-all hover:scale-110"
            >
                <ChevronRight size={28} />
            </button>
        </div>
    );
};