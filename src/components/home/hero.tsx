import Link from "next/link";
import { fetchProjectsCount } from '../../../lib/queries';

export default async function Hero() {
    const projectsCount = await fetchProjectsCount();
    return (
        <section className="relative bg-white py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Decorative dots - inspired by GDG */}
                    <div className="flex justify-center gap-3 mb-8">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                        Welcome to{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            TU CODES
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed capitalize">
                      A community of developers and engineers.
                    </p>

                    {/* Description */}
                    <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
                        Join our vibrant community of coders, developers, and tech enthusiasts.
                        Learn, build, and grow together with hands-on workshops, hackathons, and exciting projects.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/about"
                            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all hover:shadow-xl hover:scale-105"
                        >
                            Learn More
                        </Link>
                        <Link
                            href="/events"
                            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all hover:shadow-lg"
                        >
                            Upcoming Events
                        </Link>
                    </div>

                    {/* Stats or decorative elements */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                            <div className="text-gray-600 font-medium">Active Members</div>
                        </div>
                        <div className="p-6 rounded-2xl bg-red-50 border border-red-100">
                            <div className="text-4xl font-bold text-red-600 mb-2">10+</div>
                            <div className="text-gray-600 font-medium">Events Conducted</div>
                        </div>
                        <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                            <div className="text-4xl font-bold text-green-600 mb-2">{ projectsCount }</div>
                            <div className="text-gray-600 font-medium">Projects Built</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
    
