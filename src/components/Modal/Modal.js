import React, {useState} from "react";

export const Modal = ({modalTitle, children, buttonText, disabled, disableText}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = (event) => {
    if (event.target.id === 'modal')
      setShowModal(false);
  }

  return (
    <>
      <button
        disabled={disabled}
        className='bg-blue-800 text-white active:bg-blue-900 font-bold uppercase text-md px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150'
        style={{
          opacity: disabled ? '0.3' : '1',
        }}
        type="button"
        onClick={() => setShowModal(true)}
      >
        {disabled && disableText ? disableText : buttonText}
      </button>
      {showModal ? (
        <>
          <div 
          onClick={handleClose}
          id="modal"
          style={{
            margin: 0
          }}
          className="fixed inset-0 bg-gray-700 overflow-y-auto bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            {/* Content */}
            <div 
            className="bg-white rounded max-w-full md:w-4/5 space-y-3 flex flex-col"
            style={{maxHeight: '90%'}}>
              {/* Header */}
              <div className="flex flex-row justify-between items-center p-2">
                <div className="flex justify-center w-full">
                  <h2 className="text-2xl md:text-3xl font-bold text-center">{modalTitle}</h2>
                </div>
                <button className="h-6 w-6 cursor-pointer relative" onClick={() => setShowModal(false)}>
                  <span className="h-0.5 w-6 bg-black left-0 absolute" style={{
                    transform: 'rotate(45deg)',
                  }}></span>
                  <span className="h-0.5 w-6 bg-black left-0 absolute" style={{
                    transform: 'rotate(-45deg)',
                  }}></span>
                </button>
              </div>
              {/* Body */}
              <div className="overflow-y-auto w-full scrollbar">
                {children}
              </div>
              {/* footer */}
              <div>

              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Modal;