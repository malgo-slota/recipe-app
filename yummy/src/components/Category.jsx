import {MdRamenDining} from 'react-icons/md';
import {GiHamburger, GiFastNoodles, GiPizzaSlice} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Category() {
    return (
        <List>
            <NavLink to={`/cuisine/Italian`}>
                <GiPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
            <NavLink to={`/cuisine/Japanesse`}>
                <MdRamenDining />
                <h4>Japanesse</h4>
            </NavLink>
            <NavLink to={`/cuisine/American`}>
                <GiHamburger />
                <h4>American</h4>
            </NavLink>
             <NavLink to={`/cuisine/Thai`}>
                <GiFastNoodles />
                <h4>Thai</h4>
            </NavLink> 
        </List>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0rem 1rem;
`;

export default Category;