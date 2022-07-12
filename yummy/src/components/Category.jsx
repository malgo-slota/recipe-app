import {MdRamenDining} from 'react-icons/md';
import {GiHamburger, GiFastNoodles, GiPizzaSlice} from 'react-icons/gi';
import styled from 'styled-components';
// import {NavLink} from 'react-router-dom';

function Category() {
    return (
        <List>
            <ListItem>
                <GiPizzaSlice />
                <h4>Italian</h4>
            </ListItem>
            <ListItem>
                <MdRamenDining />
                <h4>Japanesse</h4>
            </ListItem>
            <ListItem>
                <GiHamburger />
                <h4>American</h4>
            </ListItem>
             <ListItem>
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

const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0rem 1rem;
`;

export default Category;