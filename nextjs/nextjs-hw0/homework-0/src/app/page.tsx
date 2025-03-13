import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
  <>
    <div>Homework</div>

    <Link href={"/index"}>Click for index page</Link>
    
    <div></div>
    <Link href={"/about-us"}>About us</Link>
  </>      
  );
}
