import React from 'react'
import { useState, useRef } from 'react'
import Header from './components/header';
import Daerah from './components/daerah';
import "./App.css";



export default function App() {
  const [daerah, setDaerah] = useState([
    {
      id: 1,
      namaDaerah: "Cianjur",
      luasDaerah: 100000
    },
    {
      id: 2,
      namaDaerah: "Sukabumi",
      luasDaerah: 150000
    },
    {
      id: 3,
      namaDaerah: "Bandung",
      luasDaerah: 200000
    },
    {
      id: 4,
      namaDaerah: "Banjar",
      luasDaerah: 50000
    },
  ]);


  const [addDaerah, setAddDaerah] = useState("")
  const [EditDaerah, setEditDaerah] = useState("")
  const [addLuasDaerah, setAddLuasDaerah] = useState("")
  const [Id, SetId] = useState("")
  const nextId = useRef("5")

  return (
    <>
      <Header />
    <div className='container'>
      <div className='tampil'>

        {daerah.map((e, i) => (
          <div key={i}>
            <Daerah
              id={e.id}
              namaDaerah={e.namaDaerah}
              luasDaerah={e.luasDaerah} />
          </div>
        ))}
      </div>


      <form className='formm'>
        <center>
          <h2>TAMBAH</h2>
        </center>

        <label>
          ID:
          <br />
          <input type="number"
            value={nextId.current}
            onChange={(e) => setAddDaerah(e.target.value)} />
          <br />
          NamaDaerah:
          <br />
          <input value={addDaerah}
            onChange={(e) => setAddDaerah(e.target.value)} />
          <br />
          LuasDaerah:
          <br />
          <input value={addLuasDaerah}
            onChange={(e) => setAddLuasDaerah(e.target.value)} />
        </label>
        <br />
        <br />
        <center>


          <button
            onClick={(e) => {
              e.preventDefault();
              setDaerah([{
                id: nextId.current++,
                namaDaerah: addDaerah,
                luasDaerah: addLuasDaerah
              },
              ...daerah])
            }}>
            Depan
          </button>

          <button

onClick={(e) => {
  e.preventDefault();
  setDaerah([...daerah, {
    id: nextId.current++,
    namaDaerah: addDaerah,
    luasDaerah: addLuasDaerah
  }])
}}>
            Belakang

          </button>
        </center>

      </form>

      <form className='formm'>
        <h2 className='tengah'>Edit, Hapus Berdasarkan ID</h2>
        <label>
          ID :
          <br />
          <input type="number" value={Id}
            onChange={(e) => SetId(e.target.value)} />
          <br />
          NamaDaerah:
          <br />
          <input value={EditDaerah}
            onChange={(e) => setEditDaerah(e.target.value)} />

        </label>
        <br />
        <br />
        <button onClick={(e) => {
          e.preventDefault();
          setDaerah(daerah.map((i) => i.id == Id ? { ...i, namaDaerah: EditDaerah } : i))
        }}>
          Edit
        </button>

        <button onClick={(e) => {
          e.preventDefault();
          setDaerah(daerah.map((i) => i.id == Id ? { ...i, luasDaerah: i.luasDaerah + 1 } : i))
        }}>
          TambahLuas
        </button>

        <button onClick={(e) => {
          e.preventDefault();
          setDaerah(daerah.map((i) => i.id == Id ? { ...i, luasDaerah: i.luasDaerah - 1 } : i))
        }}>
          KurangLuas
        </button>
        <br />
        <br />
        <button onClick={(e) => {
          e.preventDefault();
          setDaerah(daerah.filter((i) => i.id != Id))
        }}>
          Hapus
        </button>


      </form>

      <form className='formm' >
        <h2 className='tengah'>Hapus</h2>
        <div>


          <button onClick={(e) => { e.preventDefault(); setDaerah(daerah.slice(1)) }} >Depan</button>
          <button onClick={(e) => { e.preventDefault(); setDaerah(daerah.slice(0, -1)) }} >Belakang</button>
          <button onClick={(e) => { e.preventDefault(); setDaerah(daerah.slice(0, 0)) }} >Semua</button>
        </div>
      </form>

    </div>
          </>
  )
}
