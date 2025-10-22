"use client";

import Image from 'next/image';

const ProfileCalloutSection = () => {
  return (
    <section className="py-12 animate-in fade-in duration-700 ease-out">
        <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10 mb-4">
                <Image
                    src="https://picsum.photos/seed/avatar/200/200"
                    alt="Profile Picture"
                    width={200}
                    height={200}
                    className="object-cover"
                    data-ai-hint="person portrait"
                />
            </div>
            <h3 className="font-headline text-2xl font-bold text-foreground">Jane Doe</h3>
            <p className="text-lg text-foreground/80">Full-Stack Web3 Developer</p>
        </div>
    </section>
  );
};

export default ProfileCalloutSection;
