import type { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "1",
        title: "Real-time Leaderboard",
        description: "Real-time updates using WebSockets, Redis session store.",
        tech: ["React", "Node", "Socket.IO", "Redis"],
        repo: "https://github.com/sugamghising/leaderboard",
        demo: "",
    },
    {
        id: "p2",
        title: "Movie Reservation System",
        description: "Seat selection, Stripe integration, and admin dashboard.",
        tech: ["React", "TypeScript", "Prisma", "Stripe"],
        repo: "",
    },
];