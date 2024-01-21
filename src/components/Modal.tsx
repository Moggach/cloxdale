const Modal = ({ onClose }) => {
  return (
   <div className="p-4 z-10">
     Congratulations on being the millionth visitor to my website 🎉
     <button onClick={onClose}>Close</button>
   </div>
  );
 };
 
 export default Modal;
 
 

