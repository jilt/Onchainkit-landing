'use client';
import Footer from 'src/components/Footer';
import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import { useAccount } from 'wagmi';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/Experience";

export default function Page() {
  const { address } = useAccount();

  return (
    <>
    <div className="menu-container poppins-extrabold">
   
      <div className="item1"><SignupButton /></div>
      <div className="item2">
      {!address && <LoginButton />}
      </div>
      <div className="item3">
        {address ? (
          <TransactionWrapper address={address} />
        ) : (
          <WalletWrapper
            className="w-[450px] max-w-full"
            text="Sign in to transact"
          />
        )}
        </div>
    </div>
<Canvas shadows camera={{ position: [0, 6, 14], fov: 42 }}>
      <color attach="background" args={["#444"]} />
      <fog attach="fog" args={["#5DE7B2", 30, 40]} />
      <Experience />
    </Canvas>
<main className="poppins-light" >
    <section className="accordion" id="contract">
		<h1 className="title poppins-semibold"><a href="#contract">Contract Address</a></h1>
		<div className="content">
			<div className="wrapper">
				<p>
					<a href="https://basescan.org/0x00000000000">0x0000000000000</a>
				</p>
			</div>
		</div>
	</section>

	<section className="accordion" id="meme">
		<h1 className="title poppins-semibold"><a href="#meme">Memes</a></h1>
		<div className="content">
			<div className="wrapper">
				<p>
					<a href="https://memedepot.com/d/" target="_blank">Check our memes</a>
          <br />
					 and share with frens.
				</p>
			</div>
		</div>
	</section>

	<section className="accordion" id="trade">
		<h1 className="title poppins-semibold"><a href="#trade">Trade</a></h1>
		<div className="content">
			<div className="wrapper">
				<p>
					Use Uniswap to 
					<a href="https://app.uniswap.org/swap?chain=base&inputCurrency=0xbf4db8b7a679f89ef38125d5f84dd1446af2ea3b" target="_blank"> Swap</a> our token.
				</p>
			</div>
		</div>
	</section>
</main>
<Footer />
</>
  );
}
