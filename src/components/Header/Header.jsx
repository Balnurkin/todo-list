import Container from "../Container/Container"
import style from './Header.module.css'

function Header (){
    return (
        <div className={style.header__container}>
            <Container>
                <h2>Тестовое название страницы</h2>
            </Container>
        </div>
    )
}

export default Header;