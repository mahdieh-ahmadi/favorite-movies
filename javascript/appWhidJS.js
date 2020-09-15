var add = document.querySelector('.Add');
var back = document.querySelector('.blackBack')
var cancleBtn = document.querySelector('.cancelbtn')
var addBtn = document.querySelector('.addbtn')
var cancleDelet = document.querySelector('.cancleDelete')
var deletbtn = document.querySelector('.doDelete')
var listadd = document.querySelector('.ListAdd')
var listdelet = document.querySelector('.listDelete')
var listOfMovies = document.querySelector('.mainlist')

var i=1;
var id;
var ShowBlack = () => {
 back.classList.toggle("visible");
listadd.classList.remove("visible");
 listdelet.classList.remove("visible");
};

var showAdd = () => {
    back.classList.toggle("visible");
    listadd.classList.toggle("visible");
}

var saveData = () => {
    //var name = document.querySelector('.name').textContent;
    var name = document.querySelector('.Name').value;
    var url = document.querySelector('.Url').value; 
    var rate= document.querySelector('.rate').value; 
    console.log(name,url,rate)
    if(5<rate || rate<0){
        alert("youre rate shuod be between 0 to 5!!")
        return
    }
    if(name=='' || url == '' || rate == ''){
        alert("check box!!")
        return
    }
    ++i;
    listOfMovies.innerHTML= listOfMovies.innerHTML+`
    <li class="movies" id="list${i}">
         <img src="${url}" alt="${name}">
            <h2>${name}</h2>
            <div>  ${rate}/5 stars </div>
    </li>`
    ;
    console.log(i,'add');
     
    /* $("#list" + i).click(
        deletBox
    ); */

    document.querySelector('#list'+i).addEventListener('click',deletBox);

    ShowBlack();
    document.querySelector('.titleBeforeAdd').style.display='none';
};

var deletBox = () => {
    listdelet.classList.toggle("visible");
    back.classList.toggle("visible");
};

var delet = () => {
    document.querySelector('#list'+i).replaceWith('');
    ShowBlack();
    i--;
    console.log(i,'delet');
    if(i==1){
        document.querySelector('.titleBeforeAdd').style.display='block';
    }
}


add.addEventListener('click',showAdd);
back.addEventListener('click',ShowBlack);
cancleBtn.addEventListener('click',ShowBlack);
addBtn.addEventListener('click',saveData);
cancleDelet.addEventListener('click',ShowBlack);
deletbtn.addEventListener('click',delet);

