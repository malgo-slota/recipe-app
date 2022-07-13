import {MdRamenDining} from 'react-icons/md';
import {GiHamburger, GiFastNoodles, GiPizzaSlice} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Category() {
    return (
        <List>
            <ListItem to={`/cuisine/Italian`}>
                <GiPizzaSlice />
                <h4>Italian</h4>
            </ListItem>
            <ListItem to={`/cuisine/Korean`}>
                <MdRamenDining />
                <h4>Korean</h4>
            </ListItem>
            <ListItem to={`/cuisine/American`}>
                <GiHamburger />
                <h4>American</h4>
            </ListItem>
             <ListItem to={`/cuisine/Thai`}>
                <GiFastNoodles />
                <h4>Thai</h4>
            </ListItem> 
        </List>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const ListItem = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0rem 1rem;
    text-decoration: none;
    border-radius: 50%;
    border: 1px solid #4b4b4b;
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    
    h4 {
        color: #4b4b4b; 
        font-size: 0.8rem;
    }
    svg {
        color: #4b4b4b; 
        font-size: 1.5rem;
    }
    &.active {
        /* background: #4b4b4b; */
        border: 8px solid #4b4b4b; 
        transition: 0.3s ease-out;
    }
`;

export default Category;