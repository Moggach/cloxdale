

const Contacts = ({ contacts }) => {
  return (
    <div id="contact">
      CONTACT
      {contacts.map((contact, index) => (
        <div key={index}>
        <h3>{contact.title} <a href={contact.link}>here</a></h3>
        </div>
      ))}

    </div>
  )
}

export default Contacts