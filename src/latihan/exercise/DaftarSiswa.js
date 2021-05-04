import React from 'react'

const DaftarSiswa = ({daftarTerlihat}) => {
    const siswa = [
        {
          nama : "Jason",
          umur : 15
        },
        {
          nama : "Herry",
          umur : 69
        },
        {
          nama : "Gilbert",
          umur : 999
        },
        {
          nama : "Liem",
          umur : 0
        },
        {
          nama : "Taju",
          umur : 69
        },
      ]

    return (
        <div>
            {
                daftarTerlihat === true ? 
                siswa.map(elemen =>
                    <div>
                    <h2 style={{color: 'red'}}>{elemen.nama}</h2>
                    <p>{elemen.umur}</p>
                    </div>) : null
            }
        </div>
    )
}

export default DaftarSiswa