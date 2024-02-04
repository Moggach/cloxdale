import SmoothScrollLink from './SmoothScrollLink';

const Navbar = () => {

  return (
    <nav

      className="z-10 bg-gray-100 h-[100px] sticky top-0 p-4 flex flex-col md:flex-row justify-between md:items-center"
    >
      <div>

        <h1 className="font-gogh text-3xl cursor-pointer">
          <SmoothScrollLink toTop={true}>CAMERON LOXDALE</SmoothScrollLink>
        </h1>
        <p>Comedy Writer</p>
      </div>

      <ul className="flex space-x-4">
        <li>
          <SmoothScrollLink to="#contacts" offset={100}>Contact</SmoothScrollLink>
        </li>
        <li>
          <SmoothScrollLink to="#credits" offset={100}>Credits</SmoothScrollLink>
        </li>
        <li>
          <SmoothScrollLink to="#nonsense" offset={100}>Nonsense</SmoothScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
