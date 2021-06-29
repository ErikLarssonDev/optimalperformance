import React from 'react';
import styled from 'styled-components'
import {firestore} from '../firebase'


class CreatePost extends React.Component {
    state = {
        title: '',
        subTitle: '',
        content: '',
        image: '',
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        firestore.collection('posts').add({
            ... this.state,
            createdAt: new Date ()
        })      
    };

    render() {
        const {title, subTitle, content} = this.state;
        return (
            <Wrapper>
                <div className="create-post">
                <h1>Create Post</h1>

                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-field">
                        <laber>Post Title</laber>
                        <input value={title} onChange={(e)=> this.setState({title: e.target.value})}/>
                    </div>

                    <div className="form-field">
                        <laber>Post Sub-title</laber>
                        <input value={subTitle} onChange={(e)=> this.setState({subTitle: e.target.value})}/>
                    </div>

                    <div className="form-field">
                        <laber>Content</laber>
                        <textarea value={content} onChange={(e)=> this.setState({content: e.target.value})}/>
                    </div>
                    <button className="btn">Create Post</button>
                </form>
            </div>
       
            </Wrapper>
        );
    }
}

const Wrapper = styled.section`
.create-post .form-field {
    text-align: left;
    display: flex;
    flex-direction: column;
    margin: 10px 10px 10px 10px;
}

.btn {
    margin-bottom: 20px;
}

input {
    height: 40px;
}

textarea {
    height: 900px;
}

.create-post {
    text-align: center;
}
  `

export default CreatePost;