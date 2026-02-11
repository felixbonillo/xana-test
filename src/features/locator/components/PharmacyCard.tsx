import Image from "next/image";
import { Pharmacy } from "../types/domain";

export const PharmacyCard = ({ pharmacy }: { pharmacy: Pharmacy }) => {
    return (
        <article className="bg-white rounded-(--radius-pharmacy) overflow-hidden shadow-(--shadow-locator) flex flex-col h-full border border-gray-100/50">
            <div className="h-40 w-full bg-gray-100 relative">
                <Image
                    src="/assets/fondo-cards.png"
                    alt={`Mapa de sucursal ${pharmacy.fullName}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-(--color-brand-orange) rounded-full border-4 border-white shadow-lg" />
                </div>
            </div>

            <div className="p-7 flex flex-col grow">
                <h3 className="font-poppins font-bold text-cacao-950 text-2xl mb-3 leading-tight">
                    {pharmacy.fullName}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {pharmacy.address}
                </p>

                <div className="space-y-2 mt-auto">
                    {pharmacy.schedules.map((schedule, index) => (
                        <div key={index} className="flex justify-start gap-2 text-sm">
                            <span className="font-bold text-brand-cacao-900 whitespace-nowrap">
                                {schedule.label}:
                            </span>
                            <span className="text-gray-600">{schedule.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};