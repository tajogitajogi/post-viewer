import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useTheme } from '../../../app/providers/ThemeProvider';
import { ClassNames } from '../../../shared/lib/ClassNames/ClassNames';
import { ThemeSwitcher } from '../../../shared/ui/ThemeSwitcher';
import './SideBar.css'
function SideBar () {
    const [show, setShow] = useState(false);
    const { theme } = useTheme()
    const handleClose = () => { setShow(false); };
    const handleShow = () => { setShow(true); };

    return (
        <>

            <Button variant={theme} onClick={handleShow} >
                Menu
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement='start' >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title >
                        Menu
                    </Offcanvas.Title>

                </Offcanvas.Header>
                <Offcanvas.Body className={ClassNames('SideBarBody', {}, [])}>
                    <ThemeSwitcher/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideBar
