

const Contacts = ({ contacts }) => {
  return (
    <div id="contact" className="flex flex-col gap-3 md:flex-row md:gap-5">


      <div className="flex flex-col gap-3 basis-1/2">
        CONTACT
        {contacts.map((contact, index) => (
          <div key={index}>
            <h3>{contact.title} <a href={contact.link}>here</a></h3>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 basis-1/2">
        WAYS NOT TO CONTACT ME FOR BALANCE
       
      </div>


    </div>
  )
}

export default Contacts