import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {

  return (
<>
<div className="menu-container poppins-extrabold">
   
    <div className="item1">Home</div>
    <div className="item2">Connect Wallet</div>
    <div className="item3">Swap</div>
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
    <div className="social-container poppins-bold">
   
    <div><a href="https://t.me/mytoken" target="_blank">Telegram</a></div>
    <div><a href="https://warpcast.com/~/channel/mytoken" target="_blank">Warpcast</a></div>
    <div><a href="https://x.com/mytoken" target="_blank">X</a></div>
    <div><a href="https://dexscreener.com/base/0xMytoken" target="_blank">Dexscreener</a></div>


    </div>
    <h1 className="footer poppins-extrabold">Team</h1>
    <div className="menu-container poppins-extrabold">
   
    <div><a href="https://dev.dev/" target="_blank">Dev</a></div>
    <div><a href="https://media.media/" target="_blank">Contact</a></div>
    <div><a href="https://founder.fund/" target="_blank">Founder</a></div>

</div>
</>
  );
}

export default App;
