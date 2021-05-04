import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react'
import firebase from '../../Config/Firebase'

const Register = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = () => {
        const data = {
            fulName: fullName,
            email: email,
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // console.log(userCredential.user.uid)
            const userId = userCredential.user.uid
            firebase.database().ref('users/' + userId).set(data).then((res) => console.log("success", res))
            })
        .catch((error) => {
            console.log(error)
            });
    }
    return (
        <div className="container mt-5">
            <p>Fullname</p>
            <input className="form-control" 
                   placeholder="masukkan nama lengkap" 
                   value={fullName}
                   onChange={(e) => setFullName(e.target.value)}/>
                   <br />
            <p>EMAIL</p>
            <input className="form-control" 
                   placeholder="masukkan email" 
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}/>
            <p className="mt-4">PASSWORD</p>
            <input className="form-control"
                   placeholder="Masukkan password anda" 
                   type="password" 
                   className="form-control password" 
                   value={password} onChange={(e) => setPassword(e.target.value)}/>
                   <br />
                <button type="button" onClick={onSubmit} className="btn btn-primary btn-customized">SUBMIT</button>
        </div>
    )
}

export default Register

