@func XMLNode.add_class_to(Text %xpath, Text %class) {
  $(%xpath) {
    add_class(%class)
    yield()
  }
}
@func XMLNode.hide(Text %xpath){
	
	$(%xpath){
	add_class("mw-hide")

	}
}
