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

Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn vue',
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';

        }
    }
}).mount('#user-goal');