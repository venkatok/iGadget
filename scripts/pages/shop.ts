$("./body"){
	add_class("mw-shop")
	$("./div[@id='Container']"){
		add_class("mw-container")
		add_class_to("./div[@id='AjaxLoading']","mw-hide")
		add_class_to("./div[@id='TopMenu']","mw-hide")
		$("./div[@id='Outer']"){
			add_class_to("./div[@id='Menu']","mw-hide")
			$("./div[@id='Wrapper']"){
				$("./div[@id='LayoutColumn1']"){
					add_class("mw-layout1")
					$("./div[@id='SideCategoryList']"){
						add_class("mw-category")
						attributes(data-ur-set: "toggler")
						$("./h2"){
							attributes(data-ur-toggler-component: "button", data-ur-state: "disabled")	
						}
						$("./div[@class='BlockContent']/div[@class='SideCategoryListClassic']"){
							$("./ul[1]"){
								add_class("no-list-style")
								add_class_to("./li","mw-bar2")
								attributes(data-ur-toggler-component: "content", data-ur-state: "disabled")
							}
						}
					}
					$("./div[@id='SideCategoryShopByPrice']"){
						add_class("mw-shop-price")
						attributes(data-ur-set: "toggler")
						$("./h2"){
							attributes(data-ur-toggler-component: "button", data-ur-state: "disabled")	
						}
						$("./div[@class='BlockContent']"){
							$("./ul[1]"){
								add_class("no-list-style")
								add_class_to("./li","mw-bar2")
								attributes(data-ur-toggler-component: "content", data-ur-state: "disabled")
							}
						}
					}
					$("./div[@id='SideShopByBrand']"){
						add_class("mw-shop-brand")
						attributes(data-ur-set: "toggler")
						$("./h2"){
							attributes(data-ur-toggler-component: "button", data-ur-state: "disabled")	
						}
						$("./div[@class='BlockContent']"){
							$("./ul[1]"){
								add_class("no-list-style")
								add_class_to("./li","mw-bar2")
								attributes(data-ur-toggler-component: "content", data-ur-state: "disabled")
							}
						}
					}
					add_class_to("./div[@id='SideNewsletterBox']","mw-hide")
				}
				$("./div[@id='LayoutColumn2']"){
					add_class_to("./div[@id='CategoryBreadcrumb']","mw-hide")
					$("./div[@id='CategoryContent']"){
						$("./form[@id='frmCompare']"){
							$("./ul[1]/li"){
								add_class("mw-misc")
								insert_bottom("div",class: "pro-details"){
									move_here("./../div[not(contains(@class, 'QuickView'))]")
									add_class_to("./div[contains(@class,'ProductCompareButton')]","mw-hide")
								}
							}
                            add_class_to("./div[@class='CompareButton']","mw-hide")
						}
					}
				}
				$("./div[@id='LayoutColumn3']"){
					add_class_to("./div[1]/div[1]/ul[1]/li","mw-misc"){
						add_class_to("./div[@class = 'TopSellerNumber']","mw-hide")
					}
					add_class_to("./div[contains(@class,'NewProducts')]/div[1]/ul[1]/li","mw-misc"){
						insert_bottom("div",class: "pro-details"){
							move_here("./../div[not(contains(@class, 'ProductImage'))]")
						}
					}
					add_class_to("./div[contains(@id,'SidePopularProducts')]/div[1]/ul[1]/li","mw-misc"){
						insert_bottom("div",class: "pro-details"){
							move_here("./../div[not(contains(@class, 'ProductImage'))]")
						}
					}
				}
			}
		}
	}
}