import Link from "next/link";

const LandingView = () => {
    return ( 
        <>
        <main>
            <header>
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
            <section></section>
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