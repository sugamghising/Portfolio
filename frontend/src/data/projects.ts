import type { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "1",
        title: "Real-time Leaderboard",
        description: "Real-time updates using WebSockets, Redis session store.",
        tech: ["React", "Node", "Socket.IO", "Redis"],
        repo: "https://github.com/sugamghising/Real-time-Leaderboard",
        demo: "https://real-time-leaderboard-psi.vercel.app",
    },
    {
        id: "2",
        title: "Movie Reservation System",
        description: "Seat selection, Stripe integration, and admin dashboard.",
        tech: ["React", "TypeScript", "Express", "Prisma", "Stripe"],
        repo: "https://github.com/sugamghising/MovieReservationSystem",
        demo: "https://movie-reservation-system-gray.vercel.app/"
    },
    {
        id: "3",
        title: "Ecommerce Application",
        description: "Modern e-commerce platform with product browsing, cart system, order, authentication, payment integration and admin product management.",
        tech: ["React", "Express", "MongoDB", "Stripe"],
        repo: "https://github.com/sugamghising/EcommerceApplication",
        demo: "https://ecommerce-application-frontend-nine.vercel.app/"
    },
    {
        id: "4",
        title: "Real-time Chat Application",
        description:
            "Real-time messaging with WebSockets, online status, unread message indicators, and secure JWT authentication.",
        tech: ["React", "TypeScript", "Socket.IO", "Node.js", "MongoDB"],
        repo: "https://github.com/sugamghising/ChatApp",
        demo: "https://chat-app-frontend-lac-zeta.vercel.app/",
    }
];