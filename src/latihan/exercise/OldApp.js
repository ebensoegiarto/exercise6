import React, { useState } from 'react';
import DaftarSiswa from './DaftarSiswa'
import Judul from './Judul'
const OldApp = () => {
  const [judul, setJudul] = useState()
  const [daftarTerlihat, setDaftarTerlihat] = useState()

  const gantiTitle = () => {
    setJudul(!judul) 
  }

  const gantiKondisiDaftar = () => {
    setDaftarTerlihat(!daftarTerlihat)
  }

  return (
    <div>
      <h2>{judul}</h2>
      <Judul judul={judul}/>
      <DaftarSiswa daftarTerlihat={daftarTerlihat}/>
      <button onClick={gantiTitle}>ganti title</button>
      <button onClick={gantiKondisiDaftar}>toggle daftar</button>
    </div>
  )
}

export default OldApp;
