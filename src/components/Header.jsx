import logo from "../assets/logo.svg"
const Header = ()=>{
    return(
        <header className="flex justify-between items-center px-3 py-4 rounded-md bg-soft-red text-white min-[450px]:rounded-xl min-[450px]:px-6">
            <div>
                <p className="text-xs font-light">My balance</p>
                <strong className="text-lg">$921.48</strong>
            </div>
            <img src={logo} alt="Company logo" />
        </header>
    )
}

export default Header