import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'
import Dots from './Dots'


const HeroSection = ({ section }) => {
  return (
    <>
    <div className="flex flex-col-reverse lg:flex-row gap-40 font-karla text-base ">
      <div className="basis-1/2">
        {section[0].body.map((block) => (
          <div key={block._key} style={{ margin: '10px 0' }}>
            {block.children.map((child) => (
              <span key={child._key} style={child.marks.includes('strong') ? { fontWeight: '900' } : {}}>
                {child.text}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="basis-1/2">

      <Image
        src={urlForImage(section[0].image).url()}
        width={300}
        height={300}
        layout="responsive"
        alt=""
      />
      <figcaption className="pt-2">A known mover and shaker in the industry, Cameron will typically wear shades to intimidate his opposite number in a general meeting.</figcaption>
      </div>
      </div>
<Dots/>
</>
  )
}

export default HeroSection