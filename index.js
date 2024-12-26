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
const component = React.createElement(HeaderComponent,{name: 'Iogansan'}, 'Text -- Iogansan');
const component2 = React.createElement(HeaderComponent,{name: 'Larsen'},'Text -- Larsen');

const parentElement = React.createElement('section',{},component,component2);






const root = document.querySelector('#root');

ReactDOM.render(parentElement,root);







/* 

1. Реакт - библиотека для создание пользовательских интерфейсов. 
2. Вы можете использоватьк ак обычный "ванильный" JS, как можете использовать и Рекат. Это может происходить одновременно
3. Пропсы - данные которые можно передавать в компоненты для того, что бы настраивать внешний вид компонента
4. Для того, что бы Рекат нам что-то отобразил, нам нужно вызвать метод ReactDOM.render().
Он принимает 2 параметра:
- елемент который нужно отрендерить
- елемент в который нужно рендерить
5. Рекат оперуэ Рект-елементами.
Реакт-елемент - это обьект.
Рекат-елемент намного легче, нежели тот же елемент в нативном DOMе.
6. С этих Реакт-елементов как маленьких блоков состоят Реакт-комноненты.
А с Реакт-компонент состоят странички, которые будут видеть наши пользователи
*/