import React, {useState} from 'react';
import styled from 'styled-components'
import { PageHero } from '../components'
import { Link } from 'react-router-dom'
import { storage } from "../firebase2"
import { render } from '@testing-library/react';


const ReactFirebaseFileUpload = () => {
    const [image, setImage] = useState(null);

    const handleChange = e => {
        if (e.targetfiles[0]) {
            setImage(e.targetfiles[0]);
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTast.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
            })
            )
    };

            return (
                    <Wrapper className='page section section-center'>
                <input type="file" onChange={handleChange} />
                <button onClick={handleUpload} className="btn">Upload</button>
                
                    </Wrapper>
            );
      
    };

    //render(<ReactFirebaseFileUpload />, document.querySelector("#root"));
    
    const Wrapper = styled.section`
    
    h1 {
    text-align: Center;
    }
    
    .author{
        font-style: italic;
        text-align: Center;
    
    }
    
    .post{
        border: 1px solid #e1e1e1;
        padding: 10px 10px;
        border-radius: 5px;
        margin-top: 10px;
        text-align: Left;
    }
    
    .post h3:hover{
        color: var(--clr-primary-5);
    }
    `

    export default ReactFirebaseFileUpload;