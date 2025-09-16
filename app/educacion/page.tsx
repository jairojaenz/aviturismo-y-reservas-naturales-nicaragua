import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { EducationCard } from "@/components/educationCard";
import React from "react";
export default function EducationPage() {
    return( <div className="min-h-screen">
                <Navigation />;
                <main className="py-8">
                    <div className="container-fluid px-10">
                        <div className="text-center mb-8">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Educación y Concienciación</h1>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                                Recursos educativos y programas para promover la conservación de aves y reservas naturales en Nicaragua
                            </p>
                        </div>
                        <div className="space-y-12">
                            <EducationCard/>
                        </div>
                    </div>
                    </main>
                    <Footer />
                </div>
    )

}