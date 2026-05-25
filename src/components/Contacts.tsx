
import { useEffect, useRef } from 'react';
import { useScroll } from './ScrollContext';
import Dots from './Dots'
import { useTheme } from '~/components/ThemeContext'; 


const Contacts = ({ contacts }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useScroll();

  useEffect(() => {
    if (sectionRef.current) {
      registerSection("contacts", sectionRef);
    }

  }, [registerSection]);

  // Separate contacts based on the 'nocontact' property
  const noContactArray = contacts.filter(contact => contact.nocontact);
  const otherContactsArray = contacts.filter(contact => !contact.nocontact);


  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? 'bg-darkPrimary' : 'bg-lightPrimary';
  const textColor = theme === 'dark' ? 'text-darkText' : 'text-lightText';

  

  return (
    <>
      <div ref={sectionRef} id="contacts" className="flex flex-col gap-40 md:flex-row md:gap-60 ">
        {/* Contacts with nocontact true */}
        <div className="flex flex-col gap-20 basis-1/2">
          <h2 className={`font-gogh text-lg  p-3 w-content rounded-sm -rotate-3 inline-block ${bgColor} ${textColor}`}> WAYS TO CONTACT ME</h2>

              <div className="font-karla text-base">You are well within your rights to <a className="underline text-lightPrimary" href="mailto:cameronloxdale@yahoo.co.uk?subject=Let%27s%20talk%20turkey">contact me</a></div>
              <div className="font-karla text-base">Or you can go directly to my agent Georgia Kanner at Independent Talent on this <a className="underline text-lightPrimary" href="mailto:georgiakanner@independenttalent.com">email</a></div>
        </div>
  
        </div>
      <Dots />
    </>
  );
};

export default Contacts;
