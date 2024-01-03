

const Contacts = ({ contacts }) => {
  return (
    <div id="contact">
      {contacts.map((contact, index) => (
        <div key={index}>
        <h3>{contact.name}</h3>
        </div>
      ))}

    </div>
  )
}

export default Contacts