import { PersonalInfo } from '@/data/PersonalInfo'
import { Button } from '../ui/button'

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className='w-full py-4 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm'>
      <nav className='max-w-5xl mx-auto flex items-center justify-between px-4'>
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className='text-xl font-semibold hover:text-primary transition-colors cursor-pointer'
          aria-label="Go to top"
        >
          {PersonalInfo.name}
        </a>
        <div className="flex gap-4 items-center">
          <a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            className="text-sm hover:text-primary transition-colors font-medium"
          >
            Projects
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            <Button size="sm">Contact</Button>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header