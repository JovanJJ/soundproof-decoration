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

