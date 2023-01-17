window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");



	form.addEventListener('submit', (e) => {
		e.preventDefault();

	if(input.value== ''){
		return(alert("Please enter you plan"));
		
	}

		const task = input.value;

		const temp=document.getElementById('tasks')

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);


		const task_input_el = document.createElement('span');
		task_input_el.innerHTML = task;
		
		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
	
		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		const task_up_el = document.createElement('button');
		task_up_el.classList.add('up');
		task_up_el.innerText='UP';


		const task_down_el=document.createElement('button');
		task_down_el.classList.add('down');
		task_down_el.innerText='Down';

		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';



		
		task_actions_el.appendChild(task_delete_el);
		task_actions_el.appendChild(task_up_el);
		task_actions_el.appendChild(task_down_el);
		//task_actions_el.appendChild(task_edit_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);
		
		input.value = '';
		



		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
		task_up_el.addEventListener('click', (e) => {

			let element = task_el.previousSibling;
			//console.log('element',element)
			if(element.childNodes.length)
			{	
				task_el.after(element);
			}
		});
		task_down_el.addEventListener('click',(e) =>{
            console.log("down clicked");
			let element = task_el.nextSibling;
			if(element && element.childNodes.length)
			{	
				task_el.before(element);
			 }
			 // else {
			// 	const ohman = temp.children[0];
			// 	task_el.before(ohman);
			// }

			//console.log('up',temp.children[0])


		});


		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

	});
});