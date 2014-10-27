$("./body"){
	add_class("mw-shop mw-brands")
	$("./div[@id='Container']"){
		add_class_to("./div[@id='AjaxLoading']","mw-hide")
		$("./div[@id='Outer']"){
			add_class_to("./div[@id='Menu']","mw-hide")
			$("./div[@id='Wrapper']"){
				$("./div[@id='LayoutColumn2']"){
					add_class_to("./div[@id='BrandBreadcrumb']","mw-hide")
					$("./div[@id='BrandContent']/div[@class='BlockContent']"){
						$("./form[@id='frmCompare']"){
							$("./ul[1]/li"){
								add_class("mw-misc")
								insert_bottom("div",class: "pro-details"){
									move_here("./../div[not(contains(@class, 'QuickView'))]")
								}
							}
						}
					}
				}
				add_class_to("./div[@id='LayoutColumn3']","mw-hide")
			}	
		}
	}
}