$(function(){

          
                $('#deodorizer').fullpage({
                    //option here
//                    anchors: ['firstPage','onePage','welcom','mission','footer']
                    autoScrolling: true,
                    scrollHorizontally: true,
//                    sectionSelector: '.page',
                    navigation:true,
                    navigationPosition:'right',
                    slidesNavigation: false,
                    
//                    autoScrolling:false,
//                    navigationTooltips: ['firstPage', '소개', '인사말','미션&비전','오시는길','CI소개','이용약관' ],
//                    responsiveWidth: 1336,
//                    responsiveHidth: 900,
                //    sectionsColor : []
                    scrollOverflow: true,
                    scrollOverflowReset: true,
                    // varticalCenterred: false,
                    css3: false,
//                    verticalCentered:false,
//                    responsiveWidth: 900,
//                    afterResize: function (width, height) {} //브라우저의 사이즈가 커지거나 줄었을때,                                                                      풀페이지 영역에 맞춰 이벤트 실행
                    afterLoad: function(anchorLink, index){
                        console.log("현재 색션 번호는" + index);
                        if(index == 3 || index == 5 || index == 6) {
                            $('.p_nav>ul>li>a').css('color','#333');
                            $('#fp-nav ul li a span').css('background-color','#333');
                            $('.fp-tooltip, .roll_bar>p, .menu_bar>div>p>span').css('color','#222328');
                            $('#scroll_btn, #menu_btn').css('border-color','#222328');
                            $('#scroll_btn').addClass('on');
                            $('#fp-nav ul li a span').css('background-color','#333');
                            $('.fp-controlArrow.fp-prev').css('border-color','transparent #333 transparent transparent');
                            $('.fp-controlArrow.fp-next').css('border-color','transparent transparent transparent #333');
                        } else {
                            $('.p_nav>ul>li>a').css('color','#fff');
                            $('#fp-nav ul li a span').css('background-color','#fff');
                            $('.fp-tooltip, .roll_bar>p, .menu_bar>div>p>span').css('color','#fff');
                            $('#scroll_btn').removeClass('on');
                            $('#scroll_btn, #menu_btn').css('border-color','#fff');
                            $('.fp-controlArrow.fp-prev').css('border-color','transparent #fff transparent transparent');
                            $('.fp-controlArrow.fp-next').css('border-color','transparent transparent transparent #fff');
                        } if(index == 1){
                                $('.roll_bar').css('left','50%');
                                
                                // $(window).load(function(){
                                $(function(){
                                        var pathes = $('#svg_text_t1').find('path');
                                        pathes.each(function( i, path ) {
                                            var total_length = path.getTotalLength(); // 1번 부분
                                    
                                            path.style.strokeDasharray = total_length + " " + total_length; // 2번 부분
                                            path.style.strokeDashoffset = total_length; // 3번 부분
                                    
                                            // 4번 부분
                                            $(path).animate({
                                                "strokeDashoffset" : 0,
                                            }, 3000);
                                            setTimeout(function() { 
                                                $(path).css('fill','#333');
                                                $(path).css('stroke','none');
                                            }, 3000);
                                        });
                                        
                                    // }
                                    // })(jQuery);
                              
                                });
                            } else {
                                $('.roll_bar').css('left','0%');
                                $('.text_ani_t1 path').css('stroke','#333');
                                $('.text_ani_t1 path').css('fill','rgba(0,0,0,0)');
                            }
                        
                    },
                    afterSlideLoad: function(section, origin, destination, direction){
                        console.log("현재 Slide 번호는"+ section + destination);
                        switch(destination){
                            case 1:
                                $(".green_b1").slideDown(1000);
                                $(".green_b2,.green_b3,.green_b4").hide();
                                $(".ssencatTech_b1").slideDown(1000);
                                $(".ssencatTech_b2,.ssencatTech_b3,.ssencatTech_b4").hide();
                                $(".emulsionTech_b1").slideDown(1000);
                                $(".emulsionTech_b2,.emulsionTech_b3").hide();
                                break;
                            case 2:
                                $(".certificate_b1").slideDown(1000);
                                $(".certificate_b2,.certificate_b3,.certificate_b4,.certificate_b5,.certificate_b6,.certificate_b7").hide();
                                $(".ssencatCerti_b1").slideDown(1000);
                                $(".ssencatCerti_b2,.ssencatCerti_b3,.ssencatCerti_b4").hide();
                                break;
                            case 3:
                                $(".quality_b1").slideDown(1000);
                                $(".quality_b2,.quality_b3,.quality_b4").hide();
                                $(".ssencatProd_b1").slideDown(1000);
                                break;
                            case 4:
                                $(".onPatent_b1").slideDown(1000);
                                $(".ssencatPatent_b1").slideDown(1000);
                                break;
                                
                        }
                    },
                    
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
                    $('.p_nav>ul>li>a').css('color','#333');
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
                
            $("#m_btn").click(function(){
//                e.preventDefault();
                if($('.m_nav>ul').is(":hidden")) {    // 조건문 .m_nav>ul 이 :hidden 일때 true 실행
                    $(".m_nav>ul").stop().slideDown(); 
                    $(this).addClass("on");
                    $('#fp-nav ul li a span').hide();
                } else {
                    $('.m_nav>ul').stop().slideUp(); 
                    $(this).removeClass("on");
                    $('#fp-nav ul li a span').show();  // scroll bar
                    $('.ul_list').slideUp();
                }
            });     
                
                
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
                    $(this).next(".ul_list").slideUp();
//                    $(".m_nav>ul>li>a").removeClass("on");
//                    $(this).removeClass("on");
                }
            });
    
            $(".ul_list>li>a").click(function() {
//                e.preventDefault();
                $(".m_nav>ul>li>ul").hide();
//                $(".m_nav>ul>li>a").next(".ul_list").hide();
                $('.m_nav>ul').stop().slideUp(); 
                $("#m_btn").removeClass("on");
                $('#fp-nav ul li a span').show();
                $('.ul_list').hide();
            })
         
          
//            $(document).ready(function(){
//              $(".tech_sub").hide();
//              // $("ul > li:first-child a").next().show();
//              $(".green_list a").click(function(){
//                $(this).next().slideToggle(300);
//                // $(this).next().slideDown(300);
//                $(".green_list a").not(this).next().slideUp(300);
//                return false;
//              });
//              $(".green_list a").eq(0).trigger("click");
//                console.log(eq)
//            });
    
    
            // 아코디언 accordion menu
            
            $('.accordion').on('click', function () {
                function slideDown(target) {
                    slideUp();
                    $(target).addClass('on').next().slideDown();
                }

                function slideUp() {
                    $('.accordion').removeClass('on').next().slideUp();
                };
                $(this).hasClass('on') ? slideUp() : slideDown($(this));

            });


                // 타이핑 글자 애니메이션
           
            //     // var content = $(".slider_tj1 p").text();
            // const content = "사업분야 및 연구개발 \n 화장품, 보건위생 및 바이오산업분야로 확대ㆍ연구개발";
            //     const text = document.querySelector(".child p");
            //     let i = 0;

            //     function typing(){
            //         let txt = content[i++];
            //         text.innerHTML += txt=== "\n" ? "<br/>": txt;
            //         if (i > content.length) {
            //             text.textContent = "";
            //             i = 0;
            //         }
            //     }
            //     setInterval(typing, 100)
    });