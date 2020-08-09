import React, { FunctionComponent } from 'react';

import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'



export interface Teacher {
    avatar: string,
    bio: string,
    cost: number,
    id: number,
    name: string,
    subject: string,
    user_id: number,
    whatsapp: string,
}
interface TeacherItemProps {
    teacher: Teacher,
    time: string,
    week_day: string
}


const TeacherItem:FunctionComponent<TeacherItemProps> = ({ teacher,time,week_day }) => {

    const weekDayArray = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ]

    function createNewConnection() {
        api.post('/connections', {
            user_id: teacher.id,
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a target="_blank"  rel="noopener noreferrer" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}?text=Eu%20tenho%20interesse%20em%20uma%20aula%20de%20${teacher.subject},%20${weekDayArray[parseInt(week_day)]}%20às%20${time}.`}>
                    <img src={whatsappIcon} alt="Entrar em contato via WhatsApp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;