import Link from "next/link";
import style from "./header.module.scss";

const Header = () =>{

    return(
        <header className={style.header}>
            <h1>Minicurso</h1>
            <div>
                <Link href="/" >Home</Link>
                <Link href="/user" >User</Link>
                <Link href="/list" >List</Link>
            </div>


        </header>
    )
}

export default Header;