import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import emailjs from 'emailjs-com'
import logo from '../assets/LogoOP/10.png'

const ContactPage = () => {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_t0fuwar', 'template_s9hw8bt', e.target, 'user_ArkczbVPOel6BUmQoTFa4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    return (
        <main>
            <PageHero title='contact' />
            <Wrapper className='page section section-center'>
                <div>
                    <h2>Are you ready to reach your true potential?</h2>
                </div>
                <p>
                    If you’re interested in working with me, please fill out the form below and I will reach out to you.
                    </p>

                <div className='column'>
                    <div className='form-style-1'>
                        <img src={logo} alt='Optimal Performance' style={{ width: '100%', marginTop: '-130px', marginBottom: '-100px'}}></img>
                        <p style={{marginBottom: '-30px'}}>Email: erik.u.larsson1@gmail.com</p>
                    </div>
                </div>

                <div className='column'>
                <form className="form" onSubmit={sendEmail}>
                    <ul class="form-style-1">
                        <li><label>Full Name <span class="required">*</span></label><input type="text" name="name" class="field-divided" placeholder="First" /> <input type="text" name="field2" class="field-divided" placeholder="Last" /></li>
                        <li>
                            <label>Email <span class="required">*</span></label>
                            <input type="email" name="email" class="field-long" />
                        </li>
                        <li>
                            <label>Subject<span class="required">*</span></label>
                            <select name="subject" class="field-select">
                                <option value="General training program">I want to know more about your training programs</option>
                                <option value="Individualized training program">I want to know more about individualized training programs</option>
                                <option value="All access coaching">I want to know more about all access coaching</option>
                                <option value="Seminars and workshops">I want to know more about seminars and workshops</option>
                                <option value="Question">I have a question</option>
                                <option value="Suggestion">I have a suggestion</option>
                            </select>
                        </li>
                        <li>
                            <label>Your Message <span class="required">*</span></label>
                            <textarea name="message" id="field5" class="field-long field-textarea"></textarea>
                        </li>
                        <Link to='/contactsubmit'>
                        <li>
                            <input className='btn' type="submit" value="Send" />
                        </li>
                        </Link>
                    </ul>
                    
                </form>
                </div>
            </Wrapper>
            
        </main>

    )
}

const Wrapper = styled.main`
display: grid;

.column {
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    .column {
      width: 100%;
    }
  }

.submit-btn {
    text-transform: uppercase;
    background: var(--clr-primary-5);
    color: var(--clr-primary-10);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    border-color: transparent;
  }
  .submit-btn:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-6);
  }

.form-style-1 {
	margin:10px auto;
	max-width: 400px;
	padding: 20px 12px 10px 20px;
	font: 13px "Lucida Sans Unicode", "Lucida Grande", sans-serif;
}
.form-style-1 li {
	padding: 0;
	display: block;
	list-style: none;
	margin: 10px 0 0 0;
}
.form-style-1 label{
	margin:0 0 3px 0;
	padding:0px;
	display:block;
	font-weight: bold;
}
.form-style-1 input[type=text], 
.form-style-1 input[type=date],
.form-style-1 input[type=datetime],
.form-style-1 input[type=number],
.form-style-1 input[type=search],
.form-style-1 input[type=time],
.form-style-1 input[type=url],
.form-style-1 input[type=email],
textarea, 
select{
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	border:1px solid #BEBEBE;
	padding: 7px;
	margin:0px;
	-webkit-transition: all 0.30s ease-in-out;
	-moz-transition: all 0.30s ease-in-out;
	-ms-transition: all 0.30s ease-in-out;
	-o-transition: all 0.30s ease-in-out;
	outline: none;	
}
.form-style-1 input[type=text]:focus, 
.form-style-1 input[type=date]:focus,
.form-style-1 input[type=datetime]:focus,
.form-style-1 input[type=number]:focus,
.form-style-1 input[type=search]:focus,
.form-style-1 input[type=time]:focus,
.form-style-1 input[type=url]:focus,
.form-style-1 input[type=email]:focus,
.form-style-1 textarea:focus, 
.form-style-1 select:focus{
	-moz-box-shadow: 0 0 8px #88D5E9;
	-webkit-box-shadow: 0 0 8px #88D5E9;
	box-shadow: 0 0 8px #88D5E9;
	border: 1px solid #88D5E9;
}
.form-style-1 .field-divided{
	width: 49%;
}

.form-style-1 .field-long{
	width: 100%;
}
.form-style-1 .field-select{
	width: 100%;
}
.form-style-1 .field-textarea{
	height: 100px;
}

}
.form-style-1 .required{
	color:red;
}
`

export default ContactPage