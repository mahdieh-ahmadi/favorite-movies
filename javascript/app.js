var i=1;
var id;

let keys = []

var initialData = () => {
    $(".mainlist").empty() 
    keys = []
    if(localStorage.length !== 0){
        $(".titleBeforeAdd").css("display","none");
    }else{
        $(".titleBeforeAdd").css("display","block");
    }
    for(let i=0 ; i< localStorage.length ; i++){
        keys.push(localStorage.key(i))
    }
    for(let i in keys){
        let fetchData = JSON.parse(localStorage.getItem(keys[i]))
        const newchild = document.createElement('li')
        newchild.className = "movies"
        newchild.id = `list${keys[i]}`
        newchild.innerHTML = `<img src="${fetchData.url}" alt="${fetchData.name}">
        <h2>${fetchData.name}</h2>
        <div>  ${fetchData.rate}/5 stars </div>`

        $(".mainlist").append(newchild);

        newchild.addEventListener('click' , () => {
            deletBox(keys[i])
        })
    
    }
    
}

var ShowBlack = () => {
 $(".blackBack").toggleClass("visible");
 $(".ListAdd").removeClass("visible");
 $(".listDelete").removeClass("visible");
};

var showAdd = () => {
    $(".blackBack").toggleClass("visible");
    $(".ListAdd").toggleClass("visible");
}

var saveData = () => {
    var name = $(".Name").val();
    var url = $(".Url").val();
    var rate= $(".rate").val();
    if(5<rate || rate<0){
        alert("youre rate shuod be between 0 to 5!!")
        return
    }
    if(name=='' || url == '' || rate == ''){
        alert("check box!!")
        return
    }
    ++i;
    JSON.localStorage
    localStorage.setItem(`${name}${i}${Math.random()}` ,  JSON.stringify({
        name : name,
        url : url,
        rate : rate
    }))
    initialData()
    ShowBlack();
    $(".titleBeforeAdd").css("display","none");
};

var deletBox = i => {
    id = i
    $(".listDelete").toggleClass("visible");
    $(".blackBack").toggleClass("visible");
};

var delet = i => {
    localStorage.removeItem(i)
    ShowBlack();
    initialData()
}

initialData()
$(".Add").click(
    showAdd
);
$(".blackBack").click(
    ShowBlack
);
$(".cancelbtn").click(
    ShowBlack
);
$(".addbtn").click(
    saveData
);
$(".cancleDelete").click(
    ShowBlack
);
$(".doDelete").click(() => {
    delet(id)}
);
