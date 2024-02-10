
import { useEffect, useRef } from 'react';
import { useScroll } from './ScrollContext';
import Dots from './Dots'


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

  return (
    <>
      <div ref={sectionRef} id="contacts" className="flex flex-col gap-40 md:flex-row md:gap-60 ">
        {/* Contacts with nocontact true */}
        <div className="flex flex-col gap-20 basis-1/2">
          <h2 className="font-gogh text-lg bg-neonGreen p-3 w-content rounded-sm -rotate-3 inline-block">  CONTACT</h2>

          {otherContactsArray.map((contact, index) => (
            <div key={index}>
              <div className="font-merriweather text-base">{contact.title} <a href={contact.link}>here</a></div>
            </div>
          ))}
        </div>

        {/* Contacts with nocontact false */}
        <div className="flex flex-col gap-20 basis-1/2">
          <h2 className="font-gogh text-lg bg-neonGreen p-3 rounded-sm rotate-3 inline-block">  WAYS NOT TO CONTACT ME FOR BALANCE</h2>

          {noContactArray.map((contact, index) => (
            <div key={index}>
              <div className="font-merriweather text-base"><a href={contact.link}>here</a></div>
            </div>
          ))}
        </div>
      </div>
      <Dots />
    </>
  );
};

export default Contacts;
