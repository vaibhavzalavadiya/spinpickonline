
import HomeWheel from "@/components/HomeWheel";
import { WheelEntry } from "@/lib/types";

interface WheelPageTemplateProps {
    title: string;
    description: string;
    h1: string;
    benefits: string[];
    useCases: string[];
    ctaText?: string;
    showWheel?: boolean;
    defaultEntries?: WheelEntry[];
    children?: React.ReactNode;
}

export function WheelPageTemplate({
    title,
    description,
    h1,
    benefits,
    useCases,
    ctaText = "Try It Now",
    showWheel = true,
    defaultEntries,
    children,
}: WheelPageTemplateProps) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            {/* Interactive Wheel Section */}
            {showWheel && (
                <section id="try-wheel" className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">{h1}</h1>
                        </div>
                        <HomeWheel defaultEntries={defaultEntries} />
                    </div>
                </section>
            )}

            {children}
        </div>
    );
}

