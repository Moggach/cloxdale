

const Contacts = ({ contacts }) => {
  return (
    <div className="contacts" id="contact">
      {contacts.map((contact, index) => (
        <h3>{contact.name}</h3>

      ))}

    </div>
  )
}

export default Contacts