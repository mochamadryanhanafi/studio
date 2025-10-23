"use client";

import Image from 'next/image';
import Profile3D from '../interactive/profile-3d';

const ProfileCalloutSection = () => {
  return (
    <section className="py-24 sm:py-32 animate-in fade-in duration-700 ease-out">
        <div className="relative flex flex-col items-center text-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
                <Profile3D />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
                         <Image
                            src="https://media.licdn.com/dms/image/v2/D5603AQEA5kh_DaMNJA/profile-displayphoto-crop_800_800/B56ZlGHjtvG4AI-/0/1757818012487?e=1762992000&v=beta&t=eSYIlpAvpcQsRSzKIMBajs1-EOVOXezOuneUVwM-PWQ"
                            alt="Profile Picture"
                            width={200}
                            height={200}
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
