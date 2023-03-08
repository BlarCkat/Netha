import styles from "/styles/components/topAppBar.component.module.scss";
import Link from "next/link";

const LandingNavBarComponent = () => {
    return ( 
        <>
        <nav className={styles.nav}>
            <div className="logo">Nethereal</div>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/'}>Explore</Link></li>
                <li><Link href={'/'}>Get Started</Link></li>
            </ul>
        </nav>
        </>
     );
}
 
export default LandingNavBarComponent;