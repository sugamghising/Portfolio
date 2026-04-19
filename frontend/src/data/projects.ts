import type { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "1",
        title: "Hotel Management System API",
        description: "Production-ready REST API for a multi-module hotel operations platform with reservations, rooms, rate plans, folio, POS, inventory, housekeeping, maintenance, and reporting.",
        tech: [
            "Node.js",
            "Express",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "Zod",
            "JWT",
            "Docker",
            "Redis",
            "Swagger/OpenAPI",
        ],
        repo: "https://github.com/sugamghising",
    },
    {
        id: "2",
        title: "Real Time Leaderboard",
        description: "Real-time leaderboard platform with WebSockets and Redis, secure JWT auth with refresh tokens, role-based access control, and social features including friend requests and private messaging.",
        tech: ["React", "Node.js", "Express", "PostgreSQL", "Redis", "Socket.io"],
        repo: "https://github.com/sugamghising/Real-time-Leaderboard",
        demo: "https://real-time-leaderboard-psi.vercel.app",
    },
    {
        id: "3",
        title: "Movie Booking System",
        description: "Full-stack movie booking platform with secure authentication, showtime scheduling, seat selection with double-booking prevention, Stripe payments, and an admin dashboard for revenue and occupancy analytics.",
        tech: ["React", "Node.js", "Express", "PostgreSQL", "Stripe"],
        repo: "https://github.com/sugamghising/MovieReservationSystem",
        demo: "https://movie-reservation-system-gray.vercel.app/"
    },
    {
        id: "4",
        title: "Ecommerce Application",
        description: "Modern e-commerce platform with product browsing, cart system, order, authentication, payment integration and admin product management.",
        tech: ["React", "Express", "MongoDB", "Stripe"],
        repo: "https://github.com/sugamghising/EcommerceApplication",
        demo: "https://ecommerce-application-frontend-nine.vercel.app/"
    },
    {
        id: "5",
        title: "Real-time Chat Application",
        description:
            "Real-time messaging with WebSockets, online status, unread message indicators, and secure JWT authentication.",
        tech: ["React", "TypeScript", "Socket.IO", "Node.js", "MongoDB"],
        repo: "https://github.com/sugamghising/ChatApp",
        demo: "https://chat-app-frontend-lac-zeta.vercel.app/",
    }
];