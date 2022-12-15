import { useEffect } from 'react';
import { injected } from "components/wallet/Connectors"
import { useWeb3React } from "@web3-react/core"
import { Link } from "react-router-dom"

declare global {
    interface Window {
      ethereum: any
    }
  }

const Header = () => {
    const { active, account, activate, deactivate, chainId } = useWeb3React()
    const connect = async () => {
        try {
            await activate(injected)
        } catch (ex) {
        console.log(ex)
        }
    }

    const disconnect = async () => {
        try {
          deactivate()
        } catch (ex) {
          console.log(ex)
        }
    }

    // useEffect(() => {
    //     (async () => {
    //         const ethereum = window?.ethereum;
    //         if (chainId !== 1 && active) {
    //             await ethereum.request({
    //                 method: "wallet_switchEthereumChain",
    //                 params: [{ chainId: '0x1' }],
    //             });
    //         }
    //     })();

    // },[account, chainId])

    const getShortAddress = (address: string | null | undefined) => {
        if (address) return address.slice(0, 5) + "..." + address.slice(-5);
    }

    return (
        <div className="bg-[black] w-full py-[15px] sm:px-[100px] px-[20px] h-[80px] flex justify-between">
            <Link to={'#'}>
                <img className='sm:block hidden' src="https://www.anordica.se/templates/anordica/images/main-logo.png"/>
                <img className='sm:hidden block' src="https://www.anordica.se/templates/anordica/images/main-logo-small.png"/>
            </Link>
            <button className="transition-all text-white bg-[#f9b500] py-2 sm:px-6 px-2 font-bold text-sm hover:text-[black] hover:bg-[#1f9bde] duration-300 sm:text-2xl" onClick={active ? disconnect : connect}>
                {active ? getShortAddress(account) : "Connect Wallet"}
            </button>
        </div>
    )
}

export default Header;