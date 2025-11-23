import { PersonalInfo } from '@/data/PersonalInfo'
import { Button } from '../ui/button'
import SocialLinks from '../common/SocialLinks'

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 text-center" id="hero">
        <h1 className='text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700'>
            {PersonalInfo.name}
        </h1>
        <p className="max-w-2xl mx-auto mb-6 text-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">{PersonalInfo.role}</p>
        <p className="max-w-2xl mx-auto mb-6 text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">{PersonalInfo.description}</p>
        <div className="flex justify-center gap-4 flex-wrap animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Button onClick={() => scrollToSection('projects')} className="transition-transform hover:scale-105">
                View Projects
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.location.href = `mailto:${PersonalInfo.email}`}
              className="transition-transform hover:scale-105"
            >
                Contact Me
            </Button>
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
          <SocialLinks />
        </div>
    </section>
  )
}

export default HeroSection