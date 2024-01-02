import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'

const Credits = ({ credit }) => {
 return (
   <div className="flex flex-col gap-3">
    <h3>{credit.title}</h3> 

     <p>{credit.excerpt}</p>
     <Image
       className=""
       src={urlForImage(credit.mainImage).width(500).height(300).url()}
       height={300}
       width={500}
       alt=""
     />
   </div>
 )
}

export default Credits