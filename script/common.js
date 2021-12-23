$(function(){

                $('#fullpage').fullpage({
                    //option here
//                    anchors: ['firstPage','onePage','welcom','mission','footer']
                    autoScrolling:true,
                    scrollHorizontally: true,
//                    sectionSelector: '.page',
                    navigation:true,
                    navigationPosition:'right',
                    slidesNavigation: true,
//                    autoScrolling:false,
                    navigationTooltips: ['firstPage', '소개', '인사말','미션&비전','오시는길','CI소개','이용약관' ],
//                    responsiveWidth: 1336,
                    // responsiveHidth: 900,
                //    sectionsColor : []
                    scrollOverflow: true,
                    scrollOverflowReset: true,
                    css3: false,
//                    verticalCentered:false,
//                    responsiveWidth: 900,
//                    afterResize: function (width, height) {} //브라우저의 사이즈가 커지거나 줄었을때,                                                                      풀페이지 영역에 맞춰 이벤트 실행
                    afterLoad: function(anchorLink, index){
                        console.log("현재 색션 번호는" + index);
                        if(index == 3 || index == 4 || index == 5 || index == 6) {
                            $('.p_nav>ul>li>a').css('color','#333');
                            $('#fp-nav ul li a span').css('background-color','#333');
                            $('.fp-tooltip, .roll_bar>p, .menu_bar>div>p>span').css('color','#222328');
                            $('#scroll_btn, #menu_btn').css('border-color','#222328');
                            $('#scroll_btn').addClass('on');
                            $('#fp-nav ul li a span').css('background-color','#333');
                        } else {
                            $('.p_nav>ul>li>a').css('color','#fff');
                            $('#fp-nav ul li a span').css('background-color','#fff');
                            $('.fp-tooltip, .roll_bar>p, .menu_bar>div>p>span').css('color','#fff');
                            $('#scroll_btn').removeClass('on');
                            $('#scroll_btn, #menu_btn').css('border-color','#fff');
                        } if(index == 1){
                                $('.roll_bar').css('left','50%')
                            } else {
                                $('.roll_bar').css('left','0%')
                            }
                        
                    }
                    
                });
                    
                    
                    $(document).on('click', '#moveTo', function(){
                      fullpage_api.moveTo('page2', 1);
                    });
                
           
                // logo topAnchar
            $("#logo").on('click', function(){
                $.fn.fullpage.moveTo(1);
            });

                // header hover
            $("#header_pc").hover(function (){
                    $("#header_pc").css('background','#9ea7aa');
//                    $('.p_nav>ul>li>a').css('color','#333');
                    $('.slide_title_pc').stop().slideDown(500);
                    $('.p_nav').stop().slideDown(500);
                    $('.p_nav>ul>li>ul').stop().slideDown(500);
                }, function(){
                    $("#header_pc").css('background','inherit');
//                    $('.p_nav>ul>li>a').css('color','#fff');
                    $('.slide_title_pc').hide();
                    $('.p_nav').hide();
                    $('.p_nav>ul>li>ul').stop().slideUp();
                });

                // 모바일 메뉴 리스트
                
             $("#m_btn").click(function(e){
                e.preventDefault();
                if($('.m_nav>ul').is(":hidden")) {    // 조건문 .m_nav>ul 이 :hidden 일때 true 실행
                    $(".m_nav>ul").stop().slideDown(); 
                    $(this).addClass("on");
                    $('#fp-nav ul li a span').hide();
               } else {
                    $('.m_nav>ul').stop().slideUp(); 
                    $(this).removeClass("on");
                    $('#fp-nav ul li a span').show();
                    $('.ul_list').hide();
                   }
                });     
                
//             $("#m_btn").click(function(e){
//                    e.preventDefault();
//                    $(".m_nav>ul").stop().slideToggle(); 
//                    $(".ul-list").stop().slideToggle();
//                    $(this).toggleClass("on");
////                    $('#fp-nav ul li a span').css('display','none')
//                });    
                
//                
//            $("#m_btn").click(function(e) {
//                e.preventDefault();
//                $("header nav#m_nav").show();
//                $("body").css("overflow","hidden");
//            });
//                
//           $("#close").click(function(e) {
//                e.preventDefault();
//                $("header nav#m_nav").hide();
//                $("body").css("overflow","scroll");
//            });
                
                
                // 모바일 NAV
             $(".m_nav>ul>li>a").click(function(e) {
                e.preventDefault();

                if($(this).next(".ul_list").is(":hidden")) {

                    $(".m_nav>ul>li>ul").hide();
                    $(this).next(".ul_list").slideDown();
//                    $(".m_nav>ul>li>a").removeClass("on");
//                    $(this).addClass("on");
                } else {

                    $(".m_nav>ul>li>ul").hide();
                    $(this).next(".ul_list").hide();
//                    $(".m_nav>ul>li>a").removeClass("on");
//                    $(this).removeClass("on");
                }
             });
                
       /*     $(".ul_list>li>a").click(function() {
//                e.preventDefault();
                $(".m_nav>ul>li>ul").hide();
//                $(".m_nav>ul>li>a").next(".ul_list").hide();
                $('.m_nav>ul').stop().slideUp(); 
                $("#m_btn").removeClass("on");
                $('#fp-nav ul li a span').show();
                $('.ul_list').hide();
            }); */
                 /*
                 // 탭구현하기 방법 index 순번
                 var tabAnchor = $('.')
                 var tabPanel = ('.')
                 tabAnchor.click(function(e){
                
                      e.preventDefault();
                    $(this).find('a').addClass('active');
                    $(this).siblings('a').find('a').removeClass('active');
                 
                    tabPanel.hide();
                 
                    var $targetIdx = $(this).index();
                    console.log($targetIdx);
                    tabPanel.eq($targetIdx).show();
                     
                 });
                 
                    tabAnchor.eq(0).trigger('click');

            }); */
                 
                 
                
//                $("text-list>li").click(function(e){
//                    e.preventDefault();
//                    $("ul-list").stop().slideToggle();
//                    $(this).toggleClass("on");
//                });
//                $(".ul-list>li").after(function (){
//                        $(this).css('background','#f2f2f2'),
//                        $('.sWrap li').css('display','block');
//                    }, function(){
//                        $(this).css('background','inherit'),
//                        $('.sWrap li').css('dispaly','none');
//                    });    

//                $("nav>ul>li").hover(function() {                    
//                    $(this).children("nav>ul>li>ul>li").stop().slideToggle();
//                });
                
                
//                $(".text-list>li").hover(function() {                    
//                    $(this).children(".ul-list").stop().slideToggle();
//                    $('.sWrap li').css('dispaly','none');
//                });
     });