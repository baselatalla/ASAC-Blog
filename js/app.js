'use strict';

let form = document.getElementById('form');
let blogField = document.getElementById('blogs');
BlogInfo.all = [];
let blogCounter = 1;

function BlogInfo(blogId,author,title,subject,content,day,month,year){
  this.blogId = blogId;
  this.author = author;
  this.title = title;
  this.subject = subject;
  this.content = content;
  this.day = day;
  this.month = month;
  this.year = year;
  BlogInfo.all.push(this);
}

BlogInfo.prototype.getRandomLikes = function(){
  return Math.floor(Math.random() * (500- 1 + 1) + 1);
};

if(localStorage.getItem('storedBlogs')){
  BlogInfo.all = JSON.parse(localStorage.getItem('storedBlogs'));
  blogCounter = BlogInfo.all.length;
  printer();
}


form.addEventListener('submit',formInput);


function formInput(event){
  event.preventDefault();
  event.target;
  let blogId = blogCounter;
  let author = event.target.author.value;
  let title = event.target.title.value;
  let subject = event.target.subject.value;
  let content = event.target.content.value;
  let day = event.target.day.value;
  let month = event.target.month.value;
  let year = event.target.year.value;

  new BlogInfo(blogId,author,title,subject,content,day,month,year);
  localStorage.setItem('storedBlogs',JSON.stringify(BlogInfo.all));
  blogCounter++;
  printer();
}

function printer(){
  blogField.innerHTML = '';
  let dataArray = [];
  dataArray = JSON.parse(localStorage.getItem('storedBlogs'));
  let div = document.createElement('div');
  div.setAttribute('style','width: 300px; align-items: center; border: 2px solid #000; border-radius: 5px; background-color: White  margin-left: 250px;');
  for (let i = 0 ; i < dataArray.length ; i++){
    let title = document.createElement('h1');
    title.innerHTML = dataArray[i].title;
    let img = document.createElement('img');
    img.setAttribute('src', './img/asac_ltuc.jpg');
    let author = document.createElement('h1');
    author.innerHTML = `Author: ${dataArray[i].author}`;
    let date = document.createElement('h1');
    date.innerHTML =`Date: ${dataArray[i].day}-${dataArray[i].month}-${dataArray[i].year} `;
    let likes = document.createElement('h2');
    likes.innerHTML= gerandom();
    likes.setAttribute('style','display: inline-block;border-radius: 15px; color: rgb(12, 211, 128);border: 3px solid rgb(12, 211, 128);');
    let subject = document.createElement('h2');
    subject.innerHTML = dataArray[i].subject;
    subject.setAttribute('style','display: inline-block;border-radius: 15px; color: rgb(12, 211, 128);border: 3px solid rgb(12, 211, 128);');
    let content = document.createElement('p');
    content.innerHTML = dataArray[i].content;
    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(date);
    div.appendChild(likes);
    div.appendChild(subject);
    div.appendChild(content);
  }

  blogField.appendChild(div);

}

function gerandom(){
  return Math.floor(Math.random() * (500- 1 + 1) + 1);
}

