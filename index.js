class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    increment(){
        // todo: state.cout++;
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        const h2 = React.createElement('h2',{},this.state.count);
        const btn = React.createElement('button',{onClick: ()=>{this.increment()}},'+');
        return React.createElement(React.Fragment,{},h2,btn);
    }
}

const component = React.createElement(Counter);

const root = document.querySelector('#root');

ReactDOM.render(component,root)





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
7. Состояние компоненты - такие данные, которые могут изменятся за время жызни нашей компоненты.
*/