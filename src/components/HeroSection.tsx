import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'
import Dots from './Dots'
import { useTheme } from './ThemeContext'


const HeroSection = ({ section }) => {
  const { theme } = useTheme();
  const shadowStyle = theme === 'dark'
    ? { filter: 'drop-shadow(0 4px 6px rgba(255,255,255,0.15))' }
    : { filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.25))' };

  return (
    <>
    <div className="flex flex-col-reverse lg:flex-row gap-40 font-karla text-base ">
      <div className="basis-1/2 text-center">
        {section[0].body.map((block, blockIndex) => {
          return (
            <div key={block._key} style={{ margin: '10px 0', ...(blockIndex === 0 ? { marginBottom: '24px' } : {}) }}>
              {block.children.map((child, childIndex) => (
                <span key={child._key} className={blockIndex === 0 && childIndex === 0 ? 'text-xl font-semibold' : ''}>
                  {child.text}
                </span>
              ))}
            </div>
          );
        })}
      </div>
      <div className="basis-1/2 flex flex-col gap-2">
        <div className="relative flex-1 min-h-[450px] overflow-hidden">
          <Image
            src={urlForImage(section[0].image).url()}
            fill
            alt=""
            className="rounded-md object-contain"
            style={shadowStyle}
          />
        </div>
        <figcaption className="pt-2 text-center font-karla text-md italic opacity-60 border-l-2 border-lightPrimary pl-3 mt-2">A known mover and shaker in the industry, Cameron will typically wear shades to intimidate his opposite number in a general meeting.</figcaption>
      </div>
      </div>
<Dots/>
</>
  )
}

export default HeroSection