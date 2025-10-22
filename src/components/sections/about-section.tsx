import { skills } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            I am a passionate developer and designer with a keen eye for creating beautiful, functional, and user-centric digital experiences. With a background in both art and computer science, I thrive on bridging the gap between aesthetics and technology.
          </p>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            My journey into the world of web3 has been driven by a fascination with decentralized systems and the potential they hold for a more equitable digital future. I specialize in building responsive, high-performance web applications and dApps from the ground up.
          </p>
        </div>
        <div className="lg:col-span-2">
          <div className="p-6 rounded-lg bg-card border border-border/60 shadow-lg">
            <h3 className="font-headline text-2xl font-bold text-foreground text-center">
              My Skillset
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="text-sm py-2 px-4 bg-accent/10 text-accent-foreground border-accent/20 shadow-md hover:bg-accent/20 hover:shadow-accent/20 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
