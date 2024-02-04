import SmoothScrollLink from './SmoothScrollLink';

const Navbar = () => {

  return (
    <nav

      className="z-10 bg-white sticky top-0 p-4 flex gap-20 flex-col md:flex-row justify-between md:items-center"
    >
      <div>

        <h1 className="font-gogh text-4xl cursor-pointer">
          <SmoothScrollLink toTop={true}>CAMERON LOXDALE</SmoothScrollLink>
        </h1>
        <p className="font-gogh text-2xl" >Comedy Writer</p>
      </div>

      <ul className="flex flex-wrap space-x-4 font-gogh text-lg uppercase">
        <li>
          <SmoothScrollLink to="#contacts" offset={170}>Contact</SmoothScrollLink>
        </li>
        <li>
          <SmoothScrollLink to="#credits" offset={170}>Credits</SmoothScrollLink>
        </li>
        <li>
          <SmoothScrollLink to="#nonsense" offset={170}>Nonsense</SmoothScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
