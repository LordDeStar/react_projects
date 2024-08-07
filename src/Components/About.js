import React from "react";
import './../Styles/About.css'
const About = () => {
  return (
    <div className="container">
      <h1>
        Что это за сайт и для чего он нужен?
      </h1>
      <ul>
        <li>
          Этот сайт представляет собой платформу для игры в настолку D&D. Да, таких сайтов много, чего стоит тот же <a href="https://roll20.net">roll20</a>. Но он неудобный местами, да и в 2D... В общем и целом, мой сайт является более совершенной платформой для этой замечательной игры.
        </li> 
      </ul>
      <h1>
        Какой у него функционал? 
      </h1>
      <ul className="functional">
        <li>
          Здесь можно создать персонажа и перемещать его между различными партиями. Где это нужно? Ну, допустим, что ваш персонаж погиб в одной игре, но в другой, куда вас пригласили, как раз тот же уровень у группы. Вы можете просто загрузить в новую игру своего старого персонажа!
        </li>
        <li>
          Здесь можно выбрать 3D модельку из большого количества ассетов или загрузить свою! При загрузке своей модельки в необязательном порядке можно разрешить другим пользователям использовать вашу модельку. В этом случае она загрузится на сервер и будет доступна при выборе ассетов!
        </li>
        <li>
          Следующая функция подойдёт ДМу: здесь можно быстро и удобно собрать локации из доступных ассетов! В специальных предметах, таких как сундуки, ящики, враги, и проче, можно сразу настроить лут и сложность для выпадения предмета! При этом, если выпавшее значение выше, чем сложность сразу на нескольких предметах, выпадут все, подходящие по сложности!
        </li>
      </ul>
    </div>
  );
}

export default About;