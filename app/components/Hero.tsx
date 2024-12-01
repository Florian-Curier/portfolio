import { Section } from "./Section";

export const Hero = () => {
    return (
        <Section className ="flex max-md:flex-col items-start">
<div className="flex-[2]">
   <h2 className="font-caption">Florian Curier</h2> 
   <h3>Développeur web</h3>
   <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus similique optio vitae sed provident molestias soluta distinctio, exercitationem ex corrupti laboriosam praesentium, dignissimos voluptatibus pariatur quidem, voluptas vero vel necessitatibus. 
   </p>

   <div className="flex-1">
<img 
src="florian-curier.jpg"
className = "w-32 h-auto max-w-xs"
alt= "Florian Curier"
/>
   </div>
</div>
        </Section>
    )
}