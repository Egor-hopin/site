document.addEventListener("DOMContentLoaded", allJS);
function allJS () {
  let menu = document.getElementById("menu");
  let line_1 = document.getElementById("line1");
  let block_of_main = document.getElementById("blockOfMain");
  let contacts = document.getElementById("contacts");
  let line_2 = document.getElementById("line2");
  let block_of_contacts = document.getElementById("blockOfContacts");
  let date = document.getElementById("date");
  let line_3 = document.getElementById("line3");
  let block_of_date = document.getElementById("blockOfDate");
  let date_1 = document.getElementById("date_1");
  let line_4 = document.getElementById("line4");
  let block_of_my_date = document.getElementById("blockOfMyDate");
  let yandex = document.getElementById("yandex");
  let line_5 = document.getElementById("line5");
  
  //Объявление переменных для ссылок в шапке и для навигации
  
  
  menu.addEventListener("click", moveLine1);
  function moveLine1() {
    line_1.classList.toggle("line_1_after");
    block_of_main.classList.toggle("block_of_main_after");
    if( line_2.classList.contains("line_2_after") && block_of_contacts.classList.contains("block_of_contacts_after") ) {
      line_2.classList.remove("line_2_after");
    block_of_contacts.classList.remove("block_of_contacts_after");
    } else if ( line_3.classList.contains("line_3_after") && block_of_date.classList.contains("block_of_date_after") ) {
      line_3.classList.remove("line_3_after");
      block_of_date.classList.remove("block_of_date_after")
    } else if ( line_4.classList.contains("line_4_after") && block_of_my_date.classList.contains("block_of_my_date_after") ) {
      line_4.classList.remove("line_4_after");
      block_of_my_date.classList.remove("block_of_my_date_after");
    } else if ( line_5.classList.contains("line_5_after") ) {
      line_5.classList.remove("line_5_after");
    }
  }
  contacts.addEventListener("click", moveLine2);
  function moveLine2 () {
    line_2.classList.toggle("line_2_after");
    block_of_contacts.classList.toggle("block_of_contacts_after");
    if( line_1.classList.contains("line_1_after") && block_of_main.classList.contains("block_of_main_after") ) {
      line_1.classList.remove("line_1_after");
      block_of_main.classList.remove("block_of_main_after");
    } else if ( line_3.classList.contains("line_3_after") && block_of_date.classList.contains("block_of_date_after") ) {
      line_3.classList.remove("line_3_after");
      block_of_date.classList.remove("block_of_date_after");
    } else if ( line_4.classList.contains("line_4_after") && block_of_my_date.classList.contains("block_of_my_date_after")) {
      line_4.classList.remove("line_4_after");
      block_of_my_date.classList.remove("block_of_my_date_after");
    } else if ( line_5.classList.contains("line_5_after") ) {
      line_5.classList.remove("line_5_after");
    }
  }
  date.addEventListener("click", moveLine3);
  function moveLine3 () {
    line_3.classList.toggle("line_3_after");
    block_of_date.classList.toggle("block_of_date_after");
    if( line_1.classList.contains("line_1_after") && block_of_main.classList.contains("block_of_main_after") ) {
      line_1.classList.remove("line_1_after");
      block_of_main.classList.remove("block_of_main_after");
    } else if ( line_2.classList.contains("line_2_after") && block_of_contacts.classList.contains("block_of_contacts_after") ) {
      line_2.classList.remove("line_2_after");
      block_of_contacts.classList.remove("block_of_contacts_after");
    } else if ( line_4.classList.contains("line_4_after") && block_of_my_date.classList.contains("block_of_my_date_after") ) {
      line_4.classList.remove("line_4_after");
      block_of_my_date.classList.remove("block_of_my_date_after");
    } else if ( line_5.classList.contains("line_5_after") ) {
      line_5.classList.remove("line_5_after");
    }
  }
  date_1.addEventListener("click", moveLine4);
  function moveLine4 () {
    line_4.classList.toggle("line_4_after");
    block_of_my_date.classList.toggle("block_of_my_date_after");
    if( line_1.classList.contains("line_1_after") && block_of_main.classList.contains("block_of_main_after") ) {
      line_1.classList.remove("line_1_after");
      block_of_main.classList.remove("block_of_main_after");
    } else if ( line_2.classList.contains("line_2_after") && block_of_contacts.classList.contains("block_of_contacts_after") ) {
      line_2.classList.remove("line_2_after");
      block_of_contacts.classList.remove("block_of_contacts_after");
    } else if ( line_3.classList.contains("line_3_after") && block_of_date.classList.contains("block_of_date_after") ) {
      line_3.classList.remove("line_3_after");
      block_of_date.classList.remove("block_of_date_after");
    } else if ( line_5.classList.contains("line_5_after") ) {
      line_5.classList.remove("line_5_after");
    }
  }
  yandex.addEventListener("click", moveLine5);
  function moveLine5 () {
    line_5.classList.toggle("line_5_after");
    if( line_1.classList.contains("line_1_after") && block_of_main.classList.contains("block_of_main_after") ) {
      line_1.classList.remove("line_1_after");
      block_of_main.classList.remove("block_of_main_after");
    } else if ( line_2.classList.contains("line_2_after") && block_of_contacts.classList.contains("block_of_contacts_after") ) {
      line_2.classList.remove("line_2_after");
      block_of_contacts.classList.remove("block_of_contacts_after");
    } else if ( line_3.classList.contains("line_3_after") && block_of_date.classList.contains("block_of_date_after") ) {
      line_3.classList.remove("line_3_after");
      block_of_date.classList.remove("block_of_date_after");
    } else if ( line_4.classList.contains("line_4_after") && block_of_my_date.classList.contains("block_of_my_date_after") ) {
      line_4.classList.remove("line_4_after");
      block_of_my_date.classList.remove("block_of_my_date_after");
    }
  }
  
  //Функции для ссылок в шапке и в навигации
  
  let name = document.getElementById("name");
  let surname = document.getElementById("surname");
  let nickname = document.getElementById("nickname");
  let password = document.getElementById("password");
  let button = document.getElementById("button");
  let block_of_form = document.querySelector(".block_of_form");
  let text_after_remove = document.querySelector(".text_after_remove");
  let d = new Date();
  let day = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  button.onclick = function() {
    block_of_form.remove();
    text_after_remove.innerHTML = `Приветствую тебя, ${surname.value} ${name.value} <br> Ну или как вы себя назвали: ${nickname.value} <br> Кстати, вот ваш пароль: ${password.value} <br> И кстати вот дата, когда вы здесь находитесь: ${day}:${month + 1}:${year}`;
    }
  
  //Замена формы на текс
  
  let value_of_circle = document.querySelector("#circle_of_button");
    let button_for_circle = document.getElementById("button_for_circle");
    button_for_circle.addEventListener("click", valuePlus);
  function valuePlus () {
    value_of_circle.value++;
    if(value_of_circle.value > 8) {
      button_for_circle.style.fontSize = "6px";
      button_for_circle.innerHTML = "Больше нельзя";
      button_for_circle.disabled = true;
    }
  }
  
  //Кликер
  
  let button_of_watch = document.querySelector(".button_of_watch");
  let arrow_of_watch = document.querySelector(".arrow_of_watch");
  button_of_watch.addEventListener("click", moveArrow);
  function moveArrow () {
      arrow_of_watch.classList.add("arrow_of_watch_after");                                    
  }
  
  //Секундомер 
  
  let topic_of_switch = document.querySelector(".switch_of_topic");
  let topic_of_center = document.querySelector(".topic_of_center");
  topic_of_switch.addEventListener("click", changeStyle);
  function changeStyle () {
    let body = document.querySelector("body");
    body.classList.toggle("body_2");
    
topic_of_center.classList.toggle("topic_of_center_2");
    let h1_1 = document.querySelectorAll("h1");
    for (let h1_2 of h1_1) {
    if(h1_2.style.color == "black") {
      h1_2.style.color = "white";
    } else {
      h1_2.style.color = "black";
    }
    }
    let header = document.querySelector("header");
    header.classList.toggle("header_2");
    let hrefs_of_header = document.querySelectorAll(".text_of_header a");
    for (let href_of_header of hrefs_of_header) {
      if( href_of_header.style.color == "black" ) {
        href_of_header.style.color = "white";
      } else {
        href_of_header.style.color = "black";
      }
    }
    let lines = document.querySelectorAll(".text_of_header div");
    for (let line of lines) {
      if(line.style.backgroundColor == "black") {
        line.style.backgroundColor = "white";
      } else {
        line.style.backgroundColor = "black";
      }
    }
    let main = document.getElementById("main");
    if(main.style.backgroundColor == "white") {
      main.style.backgroundColor = "black";
    } else {
      main.style.backgroundColor = "white";
      main.style.border = "3px solid black";
    }
    let h3_main = document.getElementById("h3");
    if(h3_main.style.color == "black") {
      h3_main.style.color = "white";
    } else {
      h3_main.style.color = "black";
    }
    let footer = document.querySelector("footer");
    footer.classList.toggle("footer_2");
    let h5 = document.querySelector("h5");
    if(h5.style.color == "black") {
      h5.style.color = "white";
    } else {
      h5.style.color = "black";
    }
  }
  
  //Смена темы
  
    let line_of_menu_1 = document.querySelector(".line_of_menu:nth-child(1)");
  let line_of_menu_2 = document.querySelector(".line_of_menu:nth-child(2)");
  let line_of_menu_3 = document.querySelector(".line_of_menu:nth-child(3)");
  let line_of_menu_4 = document.querySelector(".line_of_menu:nth-child(4)");
  let button_of_menu = document.querySelector(".button_of_menu");
  let line_of_main = document.querySelector(".line_of_main");
  button_of_menu.addEventListener("click", moveMenu);
  function moveMenu() {
    line_of_menu_1.classList.toggle("line_of_menu_1");
    line_of_menu_2.classList.toggle("line_of_menu_2");
    line_of_menu_3.classList.toggle("line_of_menu_3");
    line_of_menu_4.classList.toggle("line_of_menu_4");
    line_of_main.classList.toggle("line_of_main_after");
  }
}