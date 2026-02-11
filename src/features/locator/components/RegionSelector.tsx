"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Region } from "../types/domain";

interface Props {
    regions: Region[];
    activeId: number | null;
    onChange: (id: number) => void;
}

export const RegionSelector = ({ regions, activeId, onChange }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const activeRegion = regions.find((r) => r.id === activeId);

    const handleSelect = (id: number) => {
        onChange(id);
        setIsOpen(false);
    };

    return (
        <div className="flex justify-center w-full">
            {/* Selector Custom para Mobile e IPAD (< 1024px) */}
            <div className="relative w-full lg:hidden max-w-4xl">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="
            flex items-center justify-between
            w-full bg-white border border-gray-200 
            rounded-xl py-4 px-6
            font-poppins font-bold text-nube-950 text-lg
            shadow-sm focus:outline-none transition-all
          "
                >
                    <span>{activeRegion?.name ?? "Seleccionar región"}</span>
                    <ChevronDown
                        size={24}
                        className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                </button>

                {/* Menú Desplegable con Estilos Xana */}
                {isOpen && (
                    <ul className="
            absolute z-50 w-full mt-2 
            bg-white border border-gray-100 
            rounded-xl shadow-xl overflow-hidden
            animate-in fade-in zoom-in duration-200
          ">
                        {regions.map((reg) => (
                            <li key={reg.id}>
                                <button
                                    onClick={() => handleSelect(reg.id)}
                                    className={`
                    w-full text-left px-6 py-4 font-poppins font-bold text-lg
                    transition-colors hover:bg-cacao-100
                    ${reg.id === activeId ? "text-xana-orange bg-orange-50/50" : "text-nube-950"}
                  `}
                                >
                                    {reg.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Navegación para DESKTOP (>= 1024px) */}
            <nav className="hidden lg:flex flex-wrap justify-center gap-6">
                {regions.map((reg) => (
                    <button
                        key={reg.id}
                        onClick={() => onChange(reg.id)}
                        className={`
              px-10 py-3 rounded-full font-poppins font-bold text-lg transition-all
              ${reg.id === activeId
                                ? "bg-xana-orange text-white shadow-lg"
                                : "bg-transparent text-nube-950 hover:bg-white/50"
                            }
            `}
                    >
                        {reg.name}
                    </button>
                ))}
            </nav>
        </div>
    );
};