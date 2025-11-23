import { PersonalInfo } from "@/data/PersonalInfo"


const Footer = () => {
  return (
    <footer className="py-6 text-center text-sm text-muted-foreground">
© {new Date().getFullYear()} {PersonalInfo.name} — Built with React, TS & shadcn/ui
</footer>
  )
}

export default Footer