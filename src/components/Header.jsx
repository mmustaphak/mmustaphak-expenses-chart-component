import logo from "../assets/logo.svg"
const Header = ()=>{
    return(
        <header className="flex justify-between items-center p-4 rounded-lg bg-soft-red text-white min-[400px]:rounded-xl min-[400px]:px-6 ">
            <div>
                <p className="text-xs font-light">My balance</p>
                <strong className="text-lg">$921.48</strong>
            </div>
            <img src={logo} className="h-3/4" alt="Company logo" />
        </header>
    )
}

export default Header