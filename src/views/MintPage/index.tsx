import { useState } from 'react';
import ConfirmModal from "./ConfirmModal";
import { useWeb3React } from "@web3-react/core"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MintPage = () => {
    const [isModal, setModal] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isConfirm, setConfirm] = useState<boolean>(false);
    const { active, chainId, account } = useWeb3React()

    const onModal = async () => {
        const ethereum = window?.ethereum;
        if (!active) {
            toast.error('Please connect metamask', {
                autoClose: 2000,
                theme: "light",
            });
            return;
        }

        // if (chainId !== 1) {
        //     await ethereum.request({
        //         method: "wallet_switchEthereumChain",
        //         params: [{ chainId: '0x1' }],
        //     });
        //     return;
        // }

        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    const confirmMint = async () => {
        setLoading(true);
        try {
            await fetch("https://yellowsun-nft.com/api/mint", {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    address: account
                })
            });
            setLoading(false);
            setConfirm(true);
                
        } catch (err) {
            setLoading(false);
            setConfirm(false);
            toast.error('Something went wrong', {
                autoClose: 2000,
                theme: "light",
            });
        }
        // setLoading(true);
    }

    return (
        <div className="flex flex-col items-center bg-[black] sm:p-[50px] p-[30px] grow bg-[url('/public/main-top-img.png')] bg-contain bg-no-repeat">
            <ConfirmModal isModal={isModal} closeModal={closeModal} confirmMint={confirmMint} isLoading={isLoading} isConfirm={isConfirm}/>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
                {/* Same as */}
            <ToastContainer />
            <div className="drop-shadow-[0px_16px_16px_rgba(0,0,0)]">
                <h1 className="text-white sm:text-5xl text-3xl font-bold mx-auto  mb-[50px] w-fit text-center">Welcome to Anordica!</h1>
                <div className="bg-[#202020] rounded-lg py-[5px] px-[15px]">
                    <p className="text-center text-white sm:text-lg">Congratulations, you are one of the lucky few who made it to our WhiteList!</p>
                    <p className="text-center text-white sm:text-lg sm:pt-0 pt-2">You are able to mint 1 NFT as free.</p>
                </div>
            </div>

            <div className="w-full sm:hidden block mt-[40px] bg-[#202020]">
                <img src="nft.jpeg"></img>
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 mt-[30px] tracking-wider max-w-[1280px] w-full">
                <div className="flex flex-col items-center w-full bg-[#202020] border-[1px] border-[white] sm:p-[50px] p-[20px]">
                    <h2 className="text-[#80bd01] text-center sm:text-3xl text-xl font-bold">PRE-SALE MINT</h2>

                    <div className="flex justify-between w-full mt-[40px] sm:pb-[20px] pb-[10px] border-b-[1px] border-white sm:text-lg text-sm">
                        <p className="text-white">BALANCE</p>
                        <p className="text-white font-bold">FREE</p>
                    </div>

                    <div className="flex justify-between items-center w-full sm:mt-[40px] mt-[20px] sm:pb-[20px] pb-[10px] border-b-[1px] border-white sm:text-lg text-sm">
                        <p className="text-white">AMOUNT</p>
                        <div className="flex justify-center items-center font-bold border-[2px] sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] rounded-[5px] border-[#f9b500] text-white">
                            1
                        </div>
                    </div>

                    <div className="flex justify-between w-full sm:mt-[40px] mt-[20px] sm:pb-[20px] pb-[10px] border-b-[1px] border-white sm:text-lg text-sm">
                        <p className="text-white">Total Mint</p>
                        <p className="text-white font-bold">50</p>
                    </div>

                    <button className="w-full max-w-[500px] sm:mt-[50px] mt-[30px] py-[10px] tracking-wide font-bold sm:text-2xl text-xl transition-all duration-300 text-white hover:text-[black] bg-[#1f9bde] hover:bg-white"
                        onClick={onModal}
                    >
                        Mint
                    </button>

                </div>
                <div className="sm:flex hidden items-center bg-[#202020]">
                    <img src="nft.jpeg"></img>
                </div>
            </div>
        </div>
    )
}

export default MintPage;