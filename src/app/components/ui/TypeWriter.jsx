"use client"

import Typewriter from 'typewriter-effect';


export default function TypeWriter(){
    
   return (
    <Typewriter
      options={{
        strings: ['Transform your living space.', 'Choose elegant soundproof panels.', "Select refined acoustic curtains.", "Improve comfort with style", "Redefine your home office.", "Elevate every room with luxury."],
        autoStart: true,
        loop: true,
        delay: 60,
      }}
    />
  );
}

/*
<section className="   text-black px-8">
            <div className="flex flex-col lg:flex-row gap-8  w-full h-[400px]">

                <div className="flex-1 aspect-square rounded-xl">
                    <Image src={image1} alt="img" className="object-cover rounded-2xl" />
                </div>


                <div className="flex-1 aspect-squarerounded-xl lg:translate-y-30">
                    <Image src={image2} alt="img" className="object-cover rounded-2xl" />
                </div>


                <div className="flex-1 aspect-square rounded-xl">
                    <Image src={image3} alt="img" className="object-cover rounded-2xl" />
                </div>

            </div>

        </section>
        */