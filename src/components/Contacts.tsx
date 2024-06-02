
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

              <div className="font-karla text-base">You are well within your rights to contact me <a href="mailto:cameronloxdale@yahoo.co.uk?subject=Let%27s%20talk%20turkey">here.</a></div>
              <div className="font-karla text-base">Or you can go directly to my agent <a href="">here.</a></div>
        </div>
  
        {/* Contacts with nocontact false */}
        <div className="flex flex-col gap-20 basis-1/2">
          <h2 className={`font-gogh text-lg p-3 rounded-sm rotate-3 inline-block ${bgColor} ${textColor}`}> WAYS NOT TO CONTACT ME</h2> 
              <div className="font-karla  text-base">For balance, I should state that you can also contact other people. 
              <p>Here are some contact details for Dwayne the Rock Johnson in the rare event that his skills suit your needs more than mine do.</p></div>
        </div>
        </div>
      <Dots />
    </>
  );
};

export default Contacts;
