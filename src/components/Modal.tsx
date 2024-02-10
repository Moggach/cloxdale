const Modal = ({ onClose }) => {
  return (
   <div className="p-4 font-merriweather ">
     Congratulations on being the millionth visitor to my website 🎉
     <button onClick={onClose}>Close</button>
   </div>
  );
 };
 
 export default Modal;
 
 

