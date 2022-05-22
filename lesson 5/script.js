const input = document.querySelector("input");
const list = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    chapter = input.value;
    input.value= "";


const listItem = document.createElement("li");
const listBtn = document.createElement("button");
listItem.append(listText);
listText.textContent = chapter;
listItem.append(listBtn);
listBtn.textContent = 'Delete';
list.append(listItem);

listBtn.addEventListener('click', () => {
    list.remove(listItem);
        });
        input.focus();

});
