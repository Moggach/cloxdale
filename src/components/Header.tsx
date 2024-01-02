import Link from 'next/link';

export default function Header() {
 return (
   <header className="p-4">
   <nav className="flex justify-between items-center">
    <div> <div className="text-lg font-bold">CAMERON LOXDALE</div>
      <p>Comedy Writer</p>
      </div>
   
      <ul className="flex space-x-4">
        <li><Link href="/" className="">Home</Link></li>
        <li><Link href="#contact" className="">Contact</Link></li>
        <li><Link href="#credits" className="">Credits</Link></li>
        <li><Link href="#nonsense" className="">Nonsense</Link></li>

      </ul>
    </nav>
   </header>
 );
}