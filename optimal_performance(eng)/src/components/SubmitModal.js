import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useState, useContext } from 'react';
import styled from 'styled-components'

const SubmitModal = () => {
    return ( 
        <Wrapper className={`modal-overlay`}>
            <div className='modal-container'>
                <h2>We are looking forward to working with you, one of our coaches will reach out to you shortly.</h2>
                <button className='close-modal-btn'>
                    <FaTimes></FaTimes>
                </button>
            </div>
        </Wrapper>
    );
};

export default SubmitModal;



const Wrapper = styled.section`

.modal - overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100 %;
    height: 100 %;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place - items: center;
    transition: var(--transition);
    visibility: hidden;
    z - index: -1;
}
  /* OPEN/CLOSE MODAL */
  .show - modal {
    visibility: visible;
    z - index: 10;
}
  .modal - container {
    background: var(--clr - white);
    border - radius: var(--radius);
    width: 90vw;
    height: 30vh;
    max - width: var(--fixed - width);
    text - align: center;
    display: grid;
    place - items: center;
    position: relative;
}
  .close - modal - btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font - size: 2rem;
    background: transparent;
    border - color: transparent;
    color: var(--clr - red - dark);
    cursor: pointer;
}
`