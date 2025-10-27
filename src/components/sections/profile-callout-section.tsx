"use client";

import Image from 'next/image';

const ProfileCalloutSection = () => {
  return (
    <section className="py-24 sm:py-32">
        <div className="relative flex flex-col items-center text-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-primary/50 animate-pulse-slow"></div>
                <div className="absolute inset-2 flex items-center justify-center">
                    <div className="relative w-[176px] h-[176px] md:w-[208px] md:h-[208px] rounded-full overflow-hidden border-4 border-background/80 shadow-2xl shadow-primary/10">
                         <Image
                            src="https://media.licdn.com/dms/image/v2/D5603AQEA5kh_DaMNJA/profile-displayphoto-crop_800_800/B56ZlGHjtvG4AI-/0/1757818012487?e=1762992000&v=beta&t=eSYIlpAvpcQsRSzKIMBajs1-EOVOXezOuneUVwM-PWQ"
                            alt="Profile Picture"
                            width={224}
                            height={224}
                            className="object-cover"
                            data-ai-hint="person portrait"
                        />
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <h3 className="font-headline text-2xl font-bold text-foreground">Mochamad Ryan Hanafi</h3>
                <p className="text-lg text-foreground/80">Fullstack Developer | Cloud Computing | Machine Learning</p>
            </div>
        </div>
    </section>
  );
};

export default ProfileCalloutSection;
