import React from 'react';
import styled from 'styled-components'
import { PageHero } from '../components'
import { Link } from 'react-router-dom'
import {firestore} from '../firebase'

class BlogPage extends React.Component {


    state = {
    posts: [],
};

componentDidMount() {
firestore.collection('posts').get().then((snapshot) => {
    
    const posts = snapshot.docs.map(doc => {
        return {
            id: doc.id,
            ... doc.data(),
        }
    });
    console.log(snapshot);
    this.setState({
        posts,
    })
})
}



    render() {
        const { posts } = this.state;
        return (
            <main>
                <PageHero title='Blog' />
                <Wrapper className='page section section-center'>
                    <h1>Optimal Performance Blogg</h1>
                    <div className="author">av Erik Larsson</div>
                    <p>
                    Här skriver jag om träning, kost, återhämtning och annat som kan göra dig till en bättre atlet eller coach.
                    Det kommer vara en blandning av personliga erfarenheter/anekdoter och inlägg om forskning som rör styrkelyft.
                    Är det något speciellt du vill se här på bloggen så kontakta gärna mig så ska jag försöka skriva om det.    
                    </p>

                    
                    {posts.map((post) => (
                        <div className="post">
                        <img className='image' src={post.image} />
                        <Link to={`/post/${post.id}`}>
                            <h3>{post.title}</h3>
                        </Link>
                        <p>
                            {post.subTitle}
                        </p>

                    </div>
                    ))}   
                    

                </Wrapper>

            </main>
        );
    }
}

const Wrapper = styled.section`

h1 {
text-align: Center;
}

.author{
    font-style: italic;
    text-align: Center;
    margin-bottom: 10px;

}

.post{
  
    padding: 10px 10px;
    border-radius: 5px;
    margin-top: 10px;
    text-align: Left;
}

.post h3:hover{
    color: var(--clr-primary-5);
}


`

export default BlogPage;