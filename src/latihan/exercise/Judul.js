import React from 'react'

const Judul = ({judul}) => {
    const baru = [
        {
          title: "welcome",
          baru:"selamat datang"
        },
    ]
    return (
        <div>
            {
                judul === true ? 
                baru.map(elemen =>
                    <div>
                    <h2>{elemen.title}</h2>
                    </div>) :  baru.map(elemen =>
                    <div>
                    <h2>{elemen.baru}</h2>
                    </div>)
            }
        </div>
    )
}

export default Judul