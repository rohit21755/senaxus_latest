import React from 'react';
import Image from 'next/image';
import line from "@/assets/line.png"
const DashedLine = () => {
  return (
    <Image src={line} alt='' className='mx-auto'/>
  );
};

export default DashedLine;