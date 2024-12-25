class HeaderComponent extends React.Component {
    anotherMethod(){ // Другоие какието всередине компонента не запрещено(но метод render это обязательно)

    }

    render(){ // единственный метод, который вы должны вызначить в класе
        console.log(this.props);
        const p = React.createElement('p',{},'Super paragraph');
        const h2 = React.createElement('h2',{title: 'Hi!',name: 'Suuu'},`Hello ${this.props.name}`);
        const article = React.createElement('article',{},h2,p);
        return article;
    }
}
const component = React.createElement(HeaderComponent,{name: 'Iogansan'});
const component2 = React.createElement(HeaderComponent,{name: 'Larsen'});

const parentElement = React.createElement('section',{},component,component2);






const root = document.querySelector('#root');

ReactDOM.render(parentElement,root)





/* 

Подключить реакт и Реакт-ДОМ
СОздайте елемент и прикрепите его на страничку


*/