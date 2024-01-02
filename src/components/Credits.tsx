import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'
import Link from 'next/link';

const Credits = ({ credit }) => {
    return (
        <Link href={credit.externalLink}>
            <div className="flex flex-col gap-3">
                <h3>{credit.title}</h3>
               <Image
                    className=""
                    src={urlForImage(credit.mainImage).width(500).height(300).url()}
                    height={300}
                    width={500}
                    alt=""
                />
                <p>{credit.excerpt}</p>

            </div>
        </Link>
    )
}

export default Credits