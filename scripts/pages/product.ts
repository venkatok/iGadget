$('./body'){
	add_class('mw-product mw-body')
	$("./div[@id='Container']"){
			
		add_class_to('./div[@id="AjaxLoading"]','mw-hide')		
		$("./div[@id='Outer']"){
			$("./div[@id='Wrapper']"){
				hide("./div[@class='Left']")
				hide("./div[@class='Right']")
				hide("./div[@class='mw-menu-wrapper']/div[@class='Left']/div[2]")		
				$("./div[@class='Content']"){					
					add_class_to('./div[1]','mw-hide')
					hide("./div[@id='HomeFeaturedProducts']/h2/span[1]")
					hide("./div[@id='HomeNewProducts']/h2/span[1]")
					hide("./div[@id='HomeFeaturedProducts']/br[@class='Clear']")
					$('./div[@id="ProductDetails"]/div[@class="BlockContent"]'){
						add_class_to('./div[1]','mw-hide')
						$('./div[@class="ProductThumb"]'){
							
							add_class_to('./div[@class="ImageCarouselBox"]/a[@id="ImageScrollNext"]','mw-hide')


						}
						$('./div[@class="ProductMain"]'){
							add_class_to('./div[@class="ProductDetailsGrid"]/div/div[@class="Label"]','mw-left')
							add_class_to('./div[@class="productAddToCartRight"]/form/div/div/div[@class="Label QuantityInput"]','mw-left')
						}
						

					}
					$('./div[11]'){
						add_class('mw-hide')
					}
					add_class_to('./div[@id="ProductByCategory"]','mw-hide')
				}
						
			}
		}

	}	
}