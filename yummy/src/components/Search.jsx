import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/search/' + input);
    };

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input type="text" 
                        onChange={(e) => setInput(e.target.value)}
                        value={input}/>
            </div>
        </FormStyle>
    );
}

const FormStyle = styled.form`
    margin: 0rem 10rem;

    div {
        width: 100%;
        position: relative;
    }
    input{
        border: none;
        width: 100%;
        font-size: 1.5rem;
        padding: 0.8rem 3rem;
        border: 1.5px solid #4b4b4b;
        border-radius: 1rem;
        outline: none;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #4b4b4b;
    }
`;

export default Search;