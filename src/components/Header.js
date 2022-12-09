import styled from 'styled-components'


const Header = ({handleScroll}) => {

    return (
        <div className="header">
            <div className="social-links">
                <span>Link 1</span>
                <span>Link 2</span>
                <span>Link 3</span>
            </div>
            <div className="anchor-links">
                <button onClick={(event) => handleScroll(event)} value="about">About</button>
                <button onClick={(event) => handleScroll(event)} value="projects">Projects</button>
            </div>
        </div>
    );
};

export default Header;