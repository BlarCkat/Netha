import Link from "next/link";
import LandingNavBarComponent from "../components/landingNavigationBar.comp";
import { User } from "./data/user.model";

const LandingView = () => {
    const user = User;
    return ( 
        <>
        <main className={'dark'}>
            <LandingNavBarComponent/>
            <header>
                <h1>{user.name}</h1>
                <div className="hero">
                    <h1>Enter the void. Become the Nether.</h1>
                    <p>Experience the new reality of endless possibilities. Join Netha today to discover life without limits.</p>
                    <Link href={'/'} className="btn btnPrimary">Get Started</Link>
                </div>
            </header>
            <section>
                <h2>Enter-the-galactic</h2>
                
            </section>
            <section>
                <h2>Create your own existence. Anywhere.</h2>
                <p></p>
            </section>
            <section>
                <div className="section">
                    <h3>Dual Existence</h3>
                    <p>Exist in two or more worlds sumultaneously</p>
                </div>
            </section>
            <footer>
                <h5>The Nethaverse is calling.</h5>
                <p>There&apos;s a whole existence waiting for you out there. Reach for it.</p>
                <Link href={'/signup'} passHref>Go to Signup</Link>
            </footer>

        </main>
        </>
     );
}
 
export default LandingView;