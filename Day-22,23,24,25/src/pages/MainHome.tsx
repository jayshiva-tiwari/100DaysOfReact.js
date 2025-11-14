"use client";


import { Button } from "../components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Template1() {
    return (
        <main className="min-h-screen bg-white text-gray-900 [font-family:var(--font-inter),sans-serif]">
            {/* Navigation */}
            <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
                <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-lg font-bold">Alex Rivera</h1>
                    <div className="w-20" />
                </div>
            </nav>

            {/* Hero Section */}
            <section className="max-w-4xl mx-auto px-6 py-24">
                <div className="mb-16">
                    <h1 className="text-6xl font-bold tracking-tight mb-4">
                        Alex Rivera
                    </h1>
                    <p className="text-2xl text-gray-600 mb-6">
                        Full Stack Developer & Creative Technologist
                    </p>
                    <p className="text-lg text-gray-600 max-w-2xl mb-8">
                        Building elegant digital experiences with modern web technologies
                    </p>
                    <div className="flex gap-4">
                        <Button variant="default" size="lg">
                            <Github className="w-4 h-4 mr-2" /> GitHub
                        </Button>
                        <Button variant="outline" size="lg">
                            <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                        </Button>
                        <Button variant="outline" size="lg">
                            <Mail className="w-4 h-4 mr-2" /> Email
                        </Button>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="bg-gray-50 py-24 border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12">Skills & Stack</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-semibold text-lg mb-4 text-gray-900">
                                Frontend
                            </h3>
                            <p className="text-gray-600">
                                React, TypeScript, Next.js, Tailwind CSS, Framer Motion
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-4 text-gray-900">
                                Backend
                            </h3>
                            <p className="text-gray-600">
                                Node.js, PostgreSQL, API Design, Authentication
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-4 text-gray-900">
                                Tools & DevOps
                            </h3>
                            <p className="text-gray-600">
                                Git, Docker, Vercel, AWS, GitHub Actions
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-4 text-gray-900">
                                Databases
                            </h3>
                            <p className="text-gray-600">
                                PostgreSQL, Supabase, Redis, MongoDB
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="max-w-4xl mx-auto px-6 py-24">
                <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
                <div className="space-y-12">
                    {/* Project 1 */}
                    <div className="pb-12 border-b border-gray-200">
                        <h3 className="text-2xl font-bold mb-2">
                            Design System Component Library
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Reusable React component library with 50+ components, full
                            TypeScript support, and comprehensive documentation.
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                            Tech: React, TypeScript, Storybook, Tailwind CSS
                        </p>
                        <div className="mb-4 h-48 bg-gray-100 rounded-lg" />
                        <ul className="text-sm text-gray-600 space-y-2 mb-6">
                            <li>• Built 50+ accessible, reusable components</li>
                            <li>• Implemented comprehensive design system documentation</li>
                            <li>
                                • Achieved 95% test coverage with Jest and React Testing Library
                            </li>
                        </ul>
                        <p className="text-sm text-gray-600 mb-6">
                            <strong>Impact:</strong> Reduced development time by 40% across
                            team projects
                        </p>
                        <div className="flex gap-3">
                            <Button variant="default" size="sm">
                                View Demo <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                            <Button variant="outline" size="sm">
                                GitHub
                            </Button>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="pb-12 border-b border-gray-200">
                        <h3 className="text-2xl font-bold mb-2">
                            AI-Powered Content Platform
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Full-stack SaaS application for content generation with real-time
                            collaboration features.
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                            Tech: Next.js, AI SDK, Supabase, Stripe
                        </p>
                        <div className="mb-4 h-48 bg-gray-100 rounded-lg" />
                        <ul className="text-sm text-gray-600 space-y-2 mb-6">
                            <li>
                                • Architected scalable Next.js backend with AI integrations
                            </li>
                            <li>• Implemented Stripe payments and subscription management</li>
                            <li>• Built real-time collaboration using WebSockets</li>
                        </ul>
                        <p className="text-sm text-gray-600 mb-6">
                            <strong>Impact:</strong> 5000+ active users, $50k ARR
                        </p>
                        <div className="flex gap-3">
                            <Button variant="default" size="sm">
                                View Demo <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                            <Button variant="outline" size="sm">
                                GitHub
                            </Button>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div>
                        <h3 className="text-2xl font-bold mb-2">
                            Mobile Task Management App
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Cross-platform mobile app with offline support and cloud
                            synchronization.
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                            Tech: React Native, Firebase, Redux
                        </p>
                        <div className="mb-4 h-48 bg-gray-100 rounded-lg" />
                        <ul className="text-sm text-gray-600 space-y-2 mb-6">
                            <li>• Developed cross-platform app supporting 50k+ downloads</li>
                            <li>
                                • Implemented offline-first architecture with Firebase sync
                            </li>
                            <li>
                                • Achieved 4.8 star rating on both App Store and Play Store
                            </li>
                        </ul>
                        <p className="text-sm text-gray-600 mb-6">
                            <strong>Impact:</strong> 4.8★ rating, featured in top charts
                        </p>
                        <div className="flex gap-3">
                            <Button variant="default" size="sm">
                                View Demo <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                            <Button variant="outline" size="sm">
                                GitHub
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-gray-50 py-24 border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">About</h2>
                    <div className="space-y-4 text-gray-600 max-w-2xl">
                        <p>
                            I'm a full-stack developer passionate about building beautiful,
                            performant web applications that solve real problems.
                        </p>
                        <p>
                            Currently exploring AI-powered products and scalable cloud
                            architecture. Focused on performance, accessibility, and user
                            experience.
                        </p>
                        <p>
                            Always eager to collaborate on interesting projects and mentor
                            junior developers. Let's build something great together.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="max-w-4xl mx-auto px-6 py-24">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Email</p>
                        <a
                            href="mailto:hello@alex.dev"
                            className="text-lg font-semibold hover:text-gray-600"
                        >
                            hello@alex.dev
                        </a>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">LinkedIn</p>
                        <a href="#" className="text-lg font-semibold hover:text-gray-600">
                            linkedin.com/in/alexrivera
                        </a>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">GitHub</p>
                        <a href="#" className="text-lg font-semibold hover:text-gray-600">
                            github.com/alexrivera
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-50 border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center text-sm text-gray-600">
                    <p>© 2025 Alex Rivera</p>
                    <div className="flex gap-4">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
