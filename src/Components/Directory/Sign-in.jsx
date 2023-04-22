import styled from "styled-components";
import { sigInwithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"


export function Sign_in() {

    const logGoogleUser = async ()=> {
        const {user} = await sigInwithGooglePopup();
        console.log(user)
        const userDocref = await createUserDocumentFromAuth(user)
    }

 return ( 
<Container>

<h1>SOY Sign</h1>
<button onClick={logGoogleUser}>Sign in whit google popup</button>

</Container>
);
}
const Container = styled.div`
`;