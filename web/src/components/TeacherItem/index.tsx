import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'


function TeacherItem() {
    return(
    <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/39105026?s=460&u=c51a7a9584c8ad11240c985aa22166c73c3cd0f0&v=4" alt="João Victor Lobão"/>
            <div>
                <strong>João Victor Lobão</strong>
                <span>Química</span>
            </div>
        </header>

        <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/><br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas 
            através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas 
            explosões.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 100,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
    
}

export default TeacherItem;