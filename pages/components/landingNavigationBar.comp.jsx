import Link from "next/link";

const LandingNavBarComponent = () => {
    return ( 
        <>
        <nav>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/'}>Explore</Link></li>
                <li><Link href={'/'}>Login</Link></li>
            </ul>
        </nav>
        </>
     );
}
 
export default LandingNavBarComponent;