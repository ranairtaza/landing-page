
import ActionsButtons from "./action-button";
import Logo from "./logo";
import NavigationBar from "./navigation-bar";

const Navbar = () => {
    return ( <div className="
    flex
    justify-between
    items-center px-10 border-b
    ">
        
            <Logo />
            <NavigationBar />
            <ActionsButtons />
        </div> );
}
 
export default Navbar;