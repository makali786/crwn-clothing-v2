import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import SignInForm from "../../../components/category-item/sign-in-form/sign-in-form.component";
import SignUpForm from "../../../components/category-item/sign-up-form/sign-up-form.component";

// import { async } from "@firebase/util";

const Authentication = () => {
	// useEffect(async () => {
	//     const response = await getRedirectResult(auth);
	//     if(response) {
	//         const userDocRef = await createUserDocumentFromAuth(response.user);
	//     }
	// }, [])

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<>
			<h1>Sign In page</h1>
			<SignInForm />
			<SignUpForm />
			{/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}
		</>
	);
};

export default Authentication;
