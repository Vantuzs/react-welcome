class HeaderComponent extends React.Component {
    anotherMethod(){ // Другоие какието всередине компонента не запрещено(но метод render это обязательно)

    }

    render(){ // единственный метод, который вы должны вызначить в класе
        const p = React.createElement('p',{},'Super paragraph');
        const h2 = React.createElement('h2',{title: 'Hi!',Agugugu: 'Suuu'},'Header');
        const article = React.createElement('article',{},h2,p);
        return article;
    }
}

const component = React.createElement(HeaderComponent);






const root = document.querySelector('#root');

ReactDOM.render(component,root)





/* 

Подключить реакт и Реакт-ДОМ
СОздайте елемент и прикрепите его на страничку


*/