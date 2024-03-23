import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'
import Dots from './Dots'


const HeroSection = ({ section }) => {
  return (
    <>
    <div className="flex flex-col md:flex-row gap-20 font-gfs  text-base ">
      <div className="basis-1/2">
        {section[0].body.map((block) => (
          <div key={block._key} style={{ margin: '10px 0' }}>
            {block.children.map((child) => (
              <span key={child._key} style={child.marks.includes('strong') ? { fontWeight: 'bold' } : {}}>
                {child.text}
              </span>
            ))}
          </div>
        ))}
      </div>

      <Image
        className=""
        src={urlForImage(section[0].image).width(500).height(300).url()}
        height={300}
        width={500}
        alt=""
      />
      </div>
<Dots/>
</>
  )
}

export default HeroSection