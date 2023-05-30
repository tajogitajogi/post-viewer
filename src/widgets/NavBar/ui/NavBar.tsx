import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useTheme } from '../../../app/providers/ThemeProvider';
import { SideBar } from '../../SideBar';

function NavBar () {
    const { theme } = useTheme()
    return (
        <Navbar bg={theme} variant={theme}>
            <Container>
                <Navbar.Brand>PostViewer</Navbar.Brand>
                <SideBar/>
            </Container>
        </Navbar>
    )
}

export default NavBar;
