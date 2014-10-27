$('./body'){
	add_class('mw-home mw-body')
	$("./div[@id='Container']"){
		hide('./br[@class="Clear"]')		
		add_class_to('./div[@id="AjaxLoading"]','mw-hide')		
		$("./div[@id='Outer']"){
			$("./div[@id='Wrapper']"){
				hide("./div[@class='Left']")
				hide("./div[@class='Right']")
				hide("./div[@class='Content']/div[@id='HomeFeaturedProducts']/h2/span[1]")
				hide("./div[@class='Content']/div[@id='HomeNewProducts']/h2/span[1]")
				hide("./div[@class='Content']/div[@id='HomeFeaturedProducts']/br[@class='Clear']")
				hide("./div[@class='Content']/div[@id='HomeNewProducts']/br[@class='Clear']")
				$("./div[@class='Content']/div[@id='HomeFeaturedProducts']/div[@class='BlockContent']"){					
					attributes(data-ur-set:'carousel',data-ur-fill:"2",data-ur-autoscroll:"disabled")
					insert('div', data-ur-carousel-component:'dots')
					$("./ul[@class='ProductList']"){
						attributes(data-ur-carousel-component:'scroll_container')
						$("./li"){
							attributes(data-ur-carousel-component:'item')
							
						}
					}
				}
				$("./div[@class='Content']/div[@id='HomeNewProducts']/div[@class='BlockContent']"){					
					attributes(data-ur-set:'carousel',data-ur-fill:"2",data-ur-autoscroll:"disabled")
					insert('div', data-ur-carousel-component:'dots')
					$("./ul[@class='ProductList']"){
						attributes(data-ur-carousel-component:'scroll_container')
						$("./li"){						
							attributes(data-ur-carousel-component:'item')							
						}
					}
				}			
			}
		}
	}	
}