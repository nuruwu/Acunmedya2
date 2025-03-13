"use client"

import { ChangeEvent, useEffect, useState } from "react"
import Example from "./components/example-component/example";
import Link from "next/link";


export default function Home() {
  
  let [name, setName] = useState<string>("Nurullah");
  
  const onBtnClick = () => {
    console.log("Butona tiklandi");
    if (name === "Nurullah") 
      setName("Nuri");
    else
      setName("Nurullah");
  }


  // hook => useEffect eger dep l'st bos ise sayfa acildiginda 1 kere calisir.
  // dep.list
  useEffect(() => {
    console.log("AABC")
  } , [])
  // name degiskeninin degisikliklerini izler
  useEffect(() => {
    console.log(name)
  } , [name])

  return (
    <>
      <Link href={"/about-us"}>Hakkimizda Sayfasi</Link>
      <p>{name}</p>
      {<button onClick={onBtnClick}>Degistir</button>}
      <input placeholder="isminizi giriniz" 
        
        value={name}
        
        onChange={
        (e: ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value)
          setName(e.target.value)
        }

      }/>
      {/*Two way data binding*/}

        <Example name="Nurullah" surname="Duyar" onClick={(message:string) => alert(message)}></Example>

    </>


     );
}
// componentlar tek wrappera sahip olmak zorundadir.

// React state mantigi.
// reconcilation
// one  way data binding

// Sifir bir nextjs projesi 2 sayfalik kendini tanitan bir websitesi
// anasayfa
// projelerim