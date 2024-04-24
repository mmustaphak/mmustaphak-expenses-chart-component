import logo from "../assets/logo.svg"
const Header = ()=>{
    return(
        <header>
            <div>
                <p>My balance</p>
                <strong>$921.48</strong>
            </div>
            <img src={logo} alt="Company logo" />
        </header>
    )
}

export default Header