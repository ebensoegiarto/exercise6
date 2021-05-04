import React, { useEffect, useState, StyleSheet } from 'react';
import firebase from './Config/Firebase'
const Login = ({title, angka}) => {
    // const [tema, timun] = useState("Ku menangis")
    const [welcome, setWelcome] = useState("Selamat datang")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handle = () => {
        const data = {
            email: email,
            password: password,
        }
        // console.log(data);
        // setWelcome("welcome!!!")
        firebase.auth().signInWithEmailAndPassword(email, password)
         .then((userCredential) => {
            console.log(userCredential)
                })
        .catch((error) => {
            console.log(error)
                });
    }

    useEffect(() => {
        console.log("component did mount")
        setTimeout(() => setWelcome("welcome"), 3000 )
    },[])

    useEffect(() => {
        console.log("component did update")
    }, [setWelcome])

    console.log("render component");

    return(
        <div
        className="bg_image pb-5"
        style={{
          backgroundImage: `url("https://www.desktopbackground.org/download/1600x900/2015/12/11/1055870_nature-wallpapers-high-resolution-free-download-desktop-wallpapers_1920x1079_h.jpg")`,
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
        }}> 

        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
            <div className="col-10 col-md-8 col-lg-6">
             <h2 style={{color: "white",}}>{welcome}</h2>
               <br/>
               <h3>{title} {angka}</h3>
                <div className="form-group"> 
                  <label for="email : ">EMAIL :</label>
                  <input placeholder="Masukkan email anda" className="form-control email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
<br/>
<br/>
                <div className="form-group">  
                    <label for="PASSWORD : ">PASSWORD :</label>
                    <input placeholder="Masukkan password anda" type="password" className="form-control password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
<br/>
<br/>
            <button type="button" onClick={handle} className="btn btn-primary btn-customized">SUBMIT</button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Login;

{/* <div
className="bg_image pb-5"
style={{
  backgroundImage: `url("https://www.desktopbackground.org/download/1600x900/2015/12/11/1055870_nature-wallpapers-high-resolution-free-download-desktop-wallpapers_1920x1079_h.jpg")`,
  backgroundSize: "cover",
  height: "100vh",
  color: "#f5f5f5",
}}>  */}