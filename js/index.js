$("document").ready(function(){
    menuFixo();
    botaoHistoria();
    abreMenu();
    fechaMenu();
    fechaMenuElemento();
});

function menuFixo(){
    $(window).scroll(function(){
        if($(document).scrollTop() > 100) {
            $("header").addClass('fixo');  
        }else { 
            $("header").removeClass('fixo');                       
        };
    });
};

function botaoHistoria(){
    var botaoHistoria = $("#botao-historia");
    botaoHistoria.on("click", function(){
        $("#historia-empresa").fadeToggle('slow');
    })
};

$(".valores-item").mouseenter(function(){
    $(this).toggleClass("aumenta");
})
$(".valores-item").mouseleave(function(){
    $(this).toggleClass("aumenta");
})


$(window).scroll(function(){
    if(($(document).scrollTop() > 0) && $(document).scrollTop() < 800) {
        $("#empresa-menu").addClass("destaque");
    }else{
        $("#empresa-menu").removeClass("destaque");
    }
})
$(window).scroll(function(){
    if(($(document).scrollTop() >= 800) && ($(document).scrollTop() < 1460)) {
        $("#missao-menu").addClass("destaque");
    }else{
        $("#missao-menu").removeClass("destaque");
    }
})
$(window).scroll(function(){
    if(($(document).scrollTop() >= 1460) && ($(document).scrollTop() < 2100)) {
        $("#valores-menu").addClass("destaque");
    }else{
        $("#valores-menu").removeClass("destaque");
    }
})
$(window).scroll(function(){
    if(($(document).scrollTop() >= 2100) && ($(document).scrollTop() < 2800)) {
        $("#visao-menu").addClass("destaque");
    }else{
        $("#visao-menu").removeClass("destaque");
    }
})
$(window).scroll(function(){
    if(($(document).scrollTop() >= 2800) && ($(document).scrollTop() < 3400)) {
        $("#servicos-menu").addClass("destaque");
    }else{
        $("#servicos-menu").removeClass("destaque");
    }
});

$(".flex-servicos").find("li").hover(function(){
    $(this).find(".explicacao").fadeIn(500);
},function(){
    $(this).find(".explicacao").fadeOut(300);
});

$("#missao-menu").on("click", function(){
    $('body').animate(
        {
            scrollTop: '800'
        },1000, fecharMenuAtivo);
});

$("#empresa-menu").on("click", function(){
    $('body').animate(
        {
            scrollTop: '0'
        },1000, fecharMenuAtivo);
});

$("#valores-menu").on("click", function(){
    $('body').animate(
        {
            scrollTop: '1460'
        },1000, fecharMenuAtivo);
});

$("#visao-menu").on("click", function(){
    $('body').animate(
        {
            scrollTop: '2200'
        },1000, fecharMenuAtivo);
});


$("#servicos-menu").on("click", function(){
    $('body').animate(
        {
            scrollTop: '2800'
        },1000, fecharMenuAtivo);
});

function abreMenu(){
    document.querySelector('.menu-abrir').onclick = function(){
        document.documentElement.classList.add('menu-ativo');
    };
};

function fechaMenu(){
    document.querySelector('.menu-fechar').onclick = function(){
        document.documentElement.classList.remove('menu-ativo');
    };
};

function fecharMenuAtivo(){
    document.documentElement.classList.remove('menu-ativo');
}

function fechaMenuElemento(){
    document.documentElement.onclick = function(event){
        if(event.target == document.documentElement){
            document.documentElement.classList.remove('menu-ativo');
        }
    }
};