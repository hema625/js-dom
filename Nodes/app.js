document.addEventListener('DOMContentLoaded', function(e){

// const banner = document.querySelector('#page-banner');

// console.log('#page-banner node type is:', banner.nodeType);
// console.log('#page-banner node name is:', banner.nodeName);
// console.log('#page-banner has child nodes:', banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);


// const bookList = document.querySelector('#book-list');
// console.log('book list parent element:', bookList.parentElement);
// console.log('book list parent node:', bookList.parentNode);
// console.log('book list Child nodes:', bookList.childNodes);
// console.log('book list Children:', bookList.children);
// console.log('all node children:');
// bookList.childNodes.forEach(function(node){
//   console.log(node);
// });

// console.log('all element children:');
// Array.from(bookList.children).forEach(function(node){
//   console.log(node);
// });

// const titles = bookList.querySelectorAll('.name');
// console.log('Book titles:', titles);
// titles.forEach(function(title){
//   console.log(title.textContent);
// });

// const bookList = document.querySelector('#book-list');
// console.log('#book-list next sibling:', bookList.nextSibling);
// console.log('#book-list next element sibling:', bookList.nextElementSibling);
// console.log('#book-list previous sibling:', bookList.previousSibling);
// console.log('#book-list previous element sibling:', bookList.previousElementSibling);
// bookList.previousElementSibling.querySelector('p').innerHTML += '<br>Too cool for everyone else!</br>';

// const listItems = document.querySelectorAll('#book-list ul li');
// console.log("listItems",listItems);
// Array.from(listItems).forEach(function(item){
//     console.log("item,",item);
//   item.addEventListener('click', (e) => {
//       console.log('e.target', e.target);
//       console.log('e.target.parentElement', e.target.parentElement);
//      const li = e.target.parentElement;
//     console.log('child element to remove:', li);
//      console.log('parent element to remove child from:', li.parentElement);
//     // li.parentElement.removeChild(li);
//   });

// });

// var btns = document.querySelectorAll('.delete');
// console.log(btns);

// btns.forEach(function(item){
//    item.addEventListener('click', function(e){
//        console.log(e.target.parentElement);
//        const li = e.target.parentElement;
//        li.parentElement.removeChild(li);
//    })
// })

// prevent default behaviour
// const link = document.querySelector('#page-banner a');
// link.addEventListener('click', function(e){
//   e.preventDefault();
//   console.log('Navigation to', e.target.textContent, 'was prevented');
// });


// const list = document.querySelector('#book-list ul');
// console.log("list",list);
// // delete books

// list.addEventListener('click', (e) => {
//     console.log("e.target",e.target)
//     console.log("e.target class",e.target.className);
//   if(e.target.className == 'delete'){
//     const li = e.target.parentElement;
//      li.parentNode.removeChild(li);
//   }
// });

const list = document.querySelector('#book-list ul');
// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// const forms = document.forms;
// console.log(forms);
// console.log(forms['add-book']);
// Array.from(forms).forEach(function(form){
//   console.log(form);
// });

const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  bookName.textContent = value;
  deleteBtn.textContent = 'delete';

//   bookName.className = "name";
//   deleteBtn.className = "delete";

   bookName.classList.add('name');
   deleteBtn.classList.add('delete');

// console.log(bookName.classList);

  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

// var li = document.querySelector('li:last-child');

// console.log("last child", li);

const hideBox = document.querySelector("#hide");
console.log("check",hideBox);

hideBox.addEventListener('change', function(e) {
   console.log("check",e.target);
   if (hideBox.checked) {
       list.style.display = 'none';
   }
   else {
       list.style.display = '';
   }
})


const searchBox =  document.forms['search-books'].querySelector('input');
const books = list.getElementsByTagName('li');
console.log("books", books)
console.log("search",searchBox);

searchBox.addEventListener("keyup",function(e) {
    console.log("target",e.target);
    const val = e.target.value.toLowerCase();
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(val)>-1) { //-1
            book.style.display = 'block';
        }
        else {
            book.style.display = 'none';
        }
    })
})
// const searchBox =  document.querySelector('#search-books');
// const bookList = document.querySelectorAll('.name');
// bookList.forEach(function(book){
// console.log("my method",book.innerHTML);
// searchBox.addEventListener("keyup",function(e) {
//     console.log("target",e.target);
//     const val = e.target.value.toLowerCase();
//     bookList.forEach(function(book){
//         // console.log(book.innerHTML);
//         if(book.innerHTML.toLowerCase().indexOf(val)>-1) {
//             book.style.display = '';
//         }
//         else {
//             book.style.display = 'none';
//         }
//     })
    
// })

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
console.log(tabs);
console.log(panels);
tabs.addEventListener('click',function(e){
    // console.log("e",e);
    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        console.log(targetPanel);
        panels.forEach(function(panel){
            console.log("panel",panel);
            if(panel===targetPanel) {
                panel.classList.add('active');
            }
            else {
                panel.classList.remove('active');
            }
        })
    }
})

});