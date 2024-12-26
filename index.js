class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            shag: 1
        };
    }

    increment(){
        // todo: state.cout++;
        this.setState({
            count: this.state.count + this.state.shag
        })
    }

    decrement(){
        if(this.state.count < this.state.shag){
            return this.setState({
                count: this.state.count = 0
            })
        }else{
        this.setState({
           count: this.state.count - this.state.shag
        })}
    }

    upShag(){
        if(this.state.shag >=5){
            this.setState({
                shag: this.state.shag = 1
            })
        }else{
            this.setState({
                shag: this.state.shag + 1
            })
        }
    }

    render(){
        const h2 = React.createElement('h2',{},this.state.count);
        const shagVui = React.createElement('h2',{},this.state.shag,' шаг');
        const btn = React.createElement('button',{onClick: ()=>{this.increment()}},'+');
        const btnMin = React.createElement('button',{onClick: ()=>{this.decrement()}},'-');
        const btnVal = React.createElement('button',{onClick: ()=>{this.upShag()}},'+1shag')
        return React.createElement(React.Fragment,{},h2,shagVui,btn,btnMin,btnVal);
    }
}

const component = React.createElement(Counter);

const root = document.querySelector('#root');

ReactDOM.render(component,root)

class Couter2 extends React.Component{
    constructor(promps){
        super(promps);
        this.state = {
            care: 1
        }
    }

    increment(){
        if(this.state.cate === 10){
            return 0;
        }else{
        this.setState({
            care: this.state.care + 1
        })
    }}

    decrement(){

    }
        
}



/* 

1. Сделайте такой же couter, который кроме инкремента будет уметь еще и декрементовать личильник




*/

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