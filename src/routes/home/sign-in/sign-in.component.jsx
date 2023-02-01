import { signInWithGooglePopup,createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    return ( 
        <>
        <h1>Sign In page</h1>
        <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        </>
     );
}
 
export default SignIn;