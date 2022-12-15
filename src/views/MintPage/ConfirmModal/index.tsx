import Modal from 'react-modal';
import { ThreeDots } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

interface ModalProps {
    isModal: boolean;
    isLoading: boolean;
    isConfirm: boolean;
    closeModal: () => void;
    confirmMint: () => void;
}

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('body');
const ConfirmModal = ({
    isModal=false,
    isLoading=false,
    isConfirm=false,
    closeModal,
    confirmMint
}: ModalProps) => {
    return (
        <Modal
            isOpen={isModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            
        >
            <div className='flex flex-col'>
                <h1 className='text-xl text-white text-center'>{isLoading && !isConfirm ? 'Transferring NFT to your wallet' : !isLoading && !isConfirm ? 'Are you sure to mint?' : ''}</h1>
                <h1 className='text-xl text-white text-center'>{isLoading ? 'Please wait...' : ''}</h1>

                <div className='h-[100px]'>
                    <div className={`w-full items-center justify-center gap-x-4 ${isConfirm ? 'flex' : 'hidden'}`}>
                        <img className='w-[40px]' src='checkmark.svg'/>
                        <p className='text-white text-lg'>Transaction Confirmed</p>
                    </div>
                </div>

                <div className='flex px-[50px] h-[40px] justify-center text-white'>
                    <div className={`items-center justify-center ${isLoading ? 'flex' : 'hidden'}`}>
                        <ThreeDots
                            height="80" 
                            width="80" 
                            radius="9"
                            color="#4fa94d" 
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            visible={true}
                        />
                    </div>
                    <div className={`w-full items-center ${isConfirm ? "justify-center" : "justify-between"}  ${isLoading ? 'hidden' : 'flex'}`}>
                        <button onClick={confirmMint} className={`w-[80px] border-white border-[1px] text-xl hover:bg-[#1f9bde] transition-all duration-300 hover:border-[#1f9bde] ${isConfirm ? "hidden" : "block"}`}>Yes</button>
                        <button onClick={closeModal} className='w-[80px] border-white border-[1px] text-xl hover:bg-[#f9b500] transition-all duration-300 hover:border-[#f9b500]'>{isConfirm ? "Close" : "No"}</button>
                    </div>
                </div>
            </div>
    </Modal>
    );
}

export default ConfirmModal;