import { Section } from './Section';    
import { GithubIcon } from './icons/GithubIcon';
import Link from 'next/link';
import { LinkedinIcon } from './icons/LinkedinIcon';

export const Header = () => {
    return (
        <header className = "sticky top-0 py-4">
            <Section className="flex items-baseline">
              <h1 className="text-lg font-bold text-gray-100">Florian Curier
              </h1> 
              <div className="flex-1" />
              <ul className ="flex items-center gap-2">
<Link 
href="https://github.com/Florian-Curier"
className ="btn size-6 btn-neutral p-0">
    <GithubIcon size={16} className="text-foreground" />
</Link>

<Link 
href="https://www.linkedin.com/in/florian-curier-5b1873332/"
className ="btn size-6 btn-neutral p-0">
    <LinkedinIcon size={16} className="text-foreground" />
</Link>
              </ul>
            </Section>
        </header>
    )
}