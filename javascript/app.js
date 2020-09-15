var i=1;
var id;
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
    //var name = document.querySelector('.name').textContent;
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
    $(".mainlist").append(`
    <li class="movies" id="list${i}">
         <img src="${url}" alt="${name}">
            <h2>${name}</h2>
            <div>  ${rate}/5 stars </div>
    </li>`
    );
    
   /*  $("ul.list > li").click(function() {
        id = $(this).id;
        console.log(id);
        deletBox();
    }
    ); */
    
    $("#list" + i).click(
        deletBox
    );

    ShowBlack();
    $(".titleBeforeAdd").css("display","none");
};

var deletBox = () => {
    $(".listDelete").toggleClass("visible");
    $(".blackBack").toggleClass("visible");
};

var delet = () => {
    $("#list"+i).replaceWith('');
    ShowBlack();
    i--;
    if(i==1){
        $('.titleBeforeAdd').css('display','block');
    }
}

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
$(".doDelete").click(
    delet
);