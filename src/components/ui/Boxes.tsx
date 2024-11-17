import Image from "next/image";
import box from '@/assets/box.png'
export default function Boxes() {
 return<>
 <Image src={box} alt="" width={120} height={120}/>
 </>
}