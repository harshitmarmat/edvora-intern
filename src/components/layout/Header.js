import classes from './Header.module.css'

const Header = () => {
    return(
        <div className={classes.container}>
            <header>
                Edvora
            </header>
            <span className={classes.subheading}>Products</span>
        </div>
    )

}

export default Header;