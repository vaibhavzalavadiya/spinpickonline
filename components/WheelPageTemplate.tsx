
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
    storageKey?: string;
    disableStorage?: boolean;
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
    storageKey,
    disableStorage,
    children,
}: WheelPageTemplateProps) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            {/* Interactive Wheel Section */}
            {showWheel && (
                <section id="try-wheel" className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                            <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">{h1}</h1>
                            <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">{description}</p>
                        </div>
                        <HomeWheel 
                            defaultEntries={defaultEntries} 
                            storageKey={storageKey}
                            disableStorage={disableStorage}
                        />
                    </div>
                </section>
            )}

            {/* Key Benefits */}
            {benefits.length > 0 && (
                <section className="py-8 lg:py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 text-center">Why Use Our {title}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-2 bg-white p-3 md:p-4 rounded-lg border border-gray-200">
                                    <span className="text-green-500 flex-shrink-0">✓</span>
                                    <span className="text-sm md:text-base text-gray-700 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Use Cases */}
            {useCases.length > 0 && (
                <section className="py-8 lg:py-12 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 text-center">Popular Uses</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
                            {useCases.map((useCase, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 md:p-4 rounded-lg border border-blue-200 text-center">
                                    <span className="text-sm md:text-base text-gray-800 font-medium">{useCase}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {children}
        </div>
    );
}
