import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'

const HeroSection = ({ section }) => {
 return (
   <div className="flex flex-col gap-3">
     {section[0].excerpt}
     <Image
       className=""
       src={urlForImage(section[0].mainImage).width(500).height(300).url()}
       height={300}
       width={500}
       alt=""
     />
   </div>
 )
}

export default HeroSection