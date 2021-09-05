
// alert('Welcome to jlop Notes online')


const $task = document.getElementById('task');
const $taskList = document.getElementById('taskList');
const $taskApp = document.getElementById('taskApp');
const $createTask = document.getElementById('createTask');
$taskApp.addEventListener('click',function(e){
    
    if(e.target.className==='task'){
        let tick = e.target.querySelector('.tick');
        tick.classList.toggle('complete')
    }
    else if(e.target.tagName==='A'){
        let parent=e.target.parentElement;
        let tick=parent.querySelector('.tick');
        tick.classList.toggle('complete')
     }
    else if(e.target.className ==='cross'){
        const parent = e.target.parentElement;
        $taskList.removeChild(parent)
    }
    else if(e.target.className==='newTask'){
        (!$createTask.value)
        ?alert('ingrese una tarea')
        :PrintTask($createTask.value);
    }
    
   
    
})



const PrintTask = content =>{
    let $newTemplate = document.getElementById('taskModel').content.cloneNode(true);
    $newTemplate.querySelector('.taskContent').textContent = `${$taskList.children.length+1}.-${content}`;
    let fragment = document.createDocumentFragment();
    fragment.appendChild($newTemplate);
    $taskList.appendChild(fragment)

}


const $darkLightMode = document.getElementById('dark-light-mode');
const $sunOrMoon = document.getElementById('sun-or-moon');
const $darkOrLight = document.getElementById('darkOrLight');
const $colorTextSelector = document.getElementById('colorTextSelector');
$darkLightMode.addEventListener('click',()=>{
    document.body.classList.toggle('light');
   if($sunOrMoon.src.includes('sun') && $darkOrLight.textContent==='Light Mode'){
       $sunOrMoon.src="moon.svg";
       $darkOrLight.textContent = 'Dark Mode';
   }
   else{
       $sunOrMoon.src="icons8-sun.svg";
       $darkOrLight.textContent = 'Light Mode'
   }
})


$colorTextSelector.addEventListener('change',()=>{
    let newColor = $colorTextSelector.value;
    document.documentElement.style.setProperty('--listColor',newColor);
})