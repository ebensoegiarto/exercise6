import {useEffect, useState} from 'react';

const Komponen = ({title, students, isShow}) => {
    const [subTitle, setSubTitle] = useState("welcome")
    const handleChange = () => {
        setSubTitle("selamat datang");
    };
    useEffect(() => {
        console.log("render Did Mount dijalankan");

        return () => {
            console.log("render Did Unmount dijalankan");
        }
    }, []);
    
    // componentDidUpdate(){
    //     console.log("render Did Update dijalankan");
    // }

    return(
        <div>
               <h3>{title}</h3>
               <h3>{subTitle}</h3>
               <ul>
                {
                    isShow ? 
                        students.map((el, index) =>
                         <li key={index}>{el.nama} - {el.address}</li>
                        )
                     : null
                }
                </ul>
          <button onClick ={handleChange}>change button</button>
        </div>
    );
}

export default Komponen;