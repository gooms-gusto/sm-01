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
            vueLink:'google.com'
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
    }
}
});

app.mount('#user-goal');