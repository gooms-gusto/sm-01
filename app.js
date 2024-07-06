/*

const buttonEl=document.querySelector('button');
const inputEl=document.querySelector('input');
const listEl=document.querySelector('ul');


function addGoal(){
const _inputValueEl = inputEl.value;
const _listItemEl= document.createElement('li');
_listItemEl.textContent = _inputValueEl;
listEl.appendChild(_listItemEl); 
_inputValueEl='';

}

buttonEl.addEventListener('click',addGoal);

*/

const app=Vue.createApp({
    data() {
        return {
            courseGoalA: 'You are still rookies',
            courseGoalB: 'You are Master Vue',
            vueLink:'google.com',
            counter:0,
            name :''
        };
    },
methods:{
    outputGoal(){
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            return this.courseGoalA;
        }else {
            return this.courseGoalB;
        }
    },
    add(){

        this.counter=this.counter+1;
    },
    reduce(){
        this.counter=this.counter-1;
    },
    setName(event,lastname){
        this.name=event.target.value + ' ' + lastname;
    }
}
});

app.mount('#events');