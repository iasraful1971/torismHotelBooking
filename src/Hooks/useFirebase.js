import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/firebase.init";

firebaseAuthentication()


const useFirebase = () =>{
        const [user, setUser] = useState({});
        const [error , seterror]  =useState('');
        const [success , setSuccess] = useState('');
        const [email , setEmail] = useState('');
        const [passsword , setPassword] =useState('');
        const auth = getAuth();
        const Googleprovider = new GoogleAuthProvider();


        //google sign in
       const handleGoogleSign =() =>{
       return signInWithPopup(auth , Googleprovider)

        .catch(error => {
            seterror("there is some problem. try agin");
            setSuccess(" ")
        });

       }
       //logout
    const logOUt =() => {
        signOut(auth)
        .then(() =>{
             setUser({ })
        }).catch(() => { })
    }
    //manage user 
        //manage user
        useEffect(() => {
            onAuthStateChanged(auth ,(user) => {
                if(user){
                    setUser(user)
                }
            })
    }, [])
       

       //handle sign up
       const handleEmail= (e) => {
            setEmail(e.target.value);
            console.log(e.target.value);
       }
       const handlePassword = (e) => {
               setPassword(e.target.value);
               console.log(e.target.value);
       }

       const handleForm = e => {
           e.preventDefault();
           createUser(email , passsword);
       }

       const createUser = (email , password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
            console.log(result.user);

            setSuccess("Successfully sign-up");
            seterror(" ");
         
            
        })
        .catch(error =>{
            seterror("there is some problem. try agin");
            setSuccess(" ");
        })
       }
      
     

        return{
                handleGoogleSign,
                user,
                error,
                success,
                handleEmail,
                handlePassword,
                handleForm,
                createUser,
                logOUt,
                
        }

} 
export default useFirebase;