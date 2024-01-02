import Image from 'next/image'
import Link from 'next/link'

import NextLogo from './nextjs.svg'
import SanityLogo from './sanity.svg'

export default function Welcome() {
  return (
    <div className="welcome__container">
      <div className="logos">
        <div className="logos__blur"></div>
        <Image className="logos__entry" src={NextLogo} alt="Next.js Logo" />
        <span className="logos__plus">+</span>
        <Image className="logos__entry" src={SanityLogo} alt="Sanity Logo" />
      </div>
      <div className="steps">
        <h2 className="steps__title">Hello World!</h2>

      </div>
    </div>
  )
}
