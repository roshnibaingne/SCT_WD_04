function addTask() {
  const textInput = document.getElementById("taskText");
  const timeInput = document.getElementById("taskTime");
  const text = textInput.value.trim();
  const time = timeInput.value;

  if (!text) return alert("Task cannot be empty!");

  const li = document.createElement("li");
  li.classList.add("task");

  li.innerHTML = `
    <div class="top">
      <span class="task-text">${text}</span>
      <div class="actions">
        <button onclick="toggleComplete(this)">✅</button>
        <button onclick="editTask(this)">✏️</button>
        <button onclick="deleteTask(this)">🗑️</button>
      </div>
    </div>
    ${time ? `<div class="time">🕒 ${new Date(time).toLocaleString()}</div>` : ""}
  `;

  document.getElementById("taskList").appendChild(li);
  textInput.value = "";
  timeInput.value = "";
}

function toggleComplete(button) {
  const task = button.closest(".task");
  task.classList.toggle("completed");
}

function deleteTask(button) {
  const task = button.closest(".task");
  task.remove();
}

function editTask(button) {
  const task = button.closest(".task");
  const taskText = task.querySelector(".task-text");
  const newText = prompt("Edit your task:", taskText.textContent);

  if (newText !== null && newText.trim() !== "") {
    taskText.textContent = newText.trim();
  }
}
