import { useState } from "react"
import Topbar from "../Topbar"
import { ListIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XIcon } from "@phosphor-icons/react"
import { HeaderContainer, HeaderMain, LinkContainer, MainContainer, MenuButton, SearchBar, SearchBarContainer, SearchButton } from "./style"
import Logo from "../../assets/geekstore-logo.svg"
// import Menu from "../Menu"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <HeaderContainer>
            <Topbar />
                {window.innerWidth < 768 ? (
                <HeaderMain>
                    <MainContainer>
                        <div>
                            <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <XIcon size={24} color="#0A0A0A" />: <ListIcon size={24} color="#0A0A0A" />}
                            </MenuButton>

                            {/* <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> */}
                        </div>
                        <div>
                            <img src={Logo} alt="" />
                        </div>
                        <LinkContainer>
                            <a href="/">
                                <UserIcon size={24} color="#0A0A0A" />
                            </a>
                            <a href="/">
                                <ShoppingCartIcon size={24} color="#0A0A0A" />
                            </a>
                        </LinkContainer>
                    </MainContainer>
                    <SearchBarContainer>
                        <SearchBar placeholder='Buscar jogos, consoles, produtos geek...' />
                        <SearchButton><MagnifyingGlassIcon size={24} color="#fff" /></SearchButton>
                    </SearchBarContainer>
                </HeaderMain>
                ) : (
                <HeaderMain>
                    <MainContainer>
                        <div>
                            <img src={Logo} alt="" />
                        </div>
                        <SearchBarContainer>
                            <SearchBar placeholder='Buscar jogos, consoles, produtos geek...' />
                            <SearchButton><MagnifyingGlassIcon size={16} color="#fff" /></SearchButton>
                        </SearchBarContainer>
                        <LinkContainer>
                            <a href="/">
                                <UserIcon size={24} color="#0A0A0A" />
                                Entrar
                            </a>
                            <a href="/">
                                <ShoppingCartIcon size={24} color="#0A0A0A" />
                                Carrinho
                            </a>
                        </LinkContainer>
                    </MainContainer>
                </HeaderMain>
                )}
                
        </HeaderContainer>    
    )
}

export default Header