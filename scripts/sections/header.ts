 $('./body') {
    insert_top("header", class: "mw-header  "){
        move_here('.././div[@id="Container"]/div[@id="TopMenu"]'){
            add_class('mw-top')
            $('./ul/li'){
                match(index()){
                    with(2){
                        $('./a'){
                            text(){
                                set('')
                            }
                            add_class('mw-icon sprites-user')
                        }
                    }
                    with(4){
                        $('./a'){
                            text(){
                                set('')
                            }
                            add_class('mw-icon sprites-cart')
                        }
                    }
                    else(){
                        add_class('mw-hide')
                    }
                }
            }
        }
        move_here('.././div[@id="Container"]/div[@id="Outer"]/div[@id="Header"]'){
            add_class('md-hd')
            $('./div[@id="Logo"]'){
                add_class('mw-logo')
                move_to('../..','top')
            }
            $('./div[@id="SearchForm"]'){
                $('./p'){
                    add_class('mw-hide')
                }
                $('./form'){
                    add_class_to('./label','mw-hide')
                    $('./input[1]'){
                        add_class('mw-searchbox');
                        attributes(placeholder:'Search')
                    }
                    $('./input[2]'){
                        add_class('mw-searchicon');
                        attributes(src:'')
                        text(){
                            set('dfgdfgd')
                        }
                    }
                    add_class_to('./input[2]','mw-hide')
                    insert_at('top',"div", class: "mw-nav-item mw-header-menu"){
                        insert("span", class: "sprites-menu mw-icon")      
                    }
                   
                        insert("span", class: "sprites-search mw-searchicon")      
                    
                }

            }
        }
    } 
    $('div[@id="Container"]/div[@id="Outer"]'){
        add_class_to('./div[@id="Menu"]','mw-hide')
        $('./div[@id="Wrapper"]/div[@class="Left"]'){
            wrap('div',class:'mw-menu-wrapper'){
                attributes(data-ur-toggler-component: "content", data-ur-state: "disabled") 
               
            
            }
             add_class_to('./div[@id="SideNewsletterBox"]','mw-hide')
                $('./div[@id="SideCategoryList"]'){
                    attributes(data-ur-set:'toggler')
                    $('./h2'){
                         attributes(data-ur-toggler-component: "button", class:'mw-bar1')

                     }
                     $('./div[@class="BlockContent"]'){
                        attributes(data-ur-toggler-component: "content",data-ur-state: "disabled")
                        add_class_to('./div/ul/li','mw-bar2')
                     }
                     wrap('div')
                     
                }
                $('./div[@id="SideShopByBrand"]'){
                    attributes(data-ur-set:'toggler')
                    $('./h2'){
                         attributes(data-ur-toggler-component: "button", class:'mw-bar1')

                     }
                     $('./div[@class="BlockContent"]'){
                        attributes(data-ur-toggler-component: "content",data-ur-state: "disabled")
                        add_class_to('./ul/li','mw-bar2')
                     }
                     wrap('div')
                     
                }
                $flag = fetch('./div[@id="SideCategoryShopByPrice"]/@style')
                match_not($flag,/display:none;/){
                    $('./div[@id="SideCategoryShopByPrice"]'){
                        attributes(data-ur-set:'toggler')
                        $('./h2'){
                             attributes(data-ur-toggler-component: "button", class:'mw-bar1')

                         }
                         $('./div[@class="BlockContent"]'){
                            attributes(data-ur-toggler-component: "content",data-ur-state: "disabled")
                            add_class_to('./ul/li','mw-bar2')
                         }
                         wrap('div')
                    }
                }
                
            
        }
          
    }

}
