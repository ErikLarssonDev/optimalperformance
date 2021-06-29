import React from 'react';
import styled from 'styled-components'
import { PageHero } from '../components'
import {firestore} from '../firebase'

class PostDetail extends React.Component {
    state = {
        post: {},
    };
    
    componentDidMount() {
        const { match: {params}, } = this.props;
    firestore
    .collection('posts')
    .doc(params.postid)
    .get().then((snapshot) => {     
        this.setState({
            post: snapshot.data(),
        })
    })
    }
    render() {
        const {post} = this.state;
        return (
            <Wrapper>
                <div className='post-container'>
                <iframe className='post' src={post.content}></iframe>
                </div>
           
            </Wrapper>     
        );
    }
}

const Wrapper = styled.section`
text-align: center;



.post {
  
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border: 0;

}
`

export default PostDetail;