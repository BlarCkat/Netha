import Link from "next/link";

const SignupView = () => {
    return ( 
        <>
        <main>
            <h1>This is the signup page.</h1>
            <input type="text" placeholder="first name" />
            <Link href={'/'}>Go back home</Link>
        </main>
        </>
     );
}
 
export default SignupView;