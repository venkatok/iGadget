/*
  Page Type

  This file defines what you will call the page throughout the project.
  This will allow you to define the analytics page_type custom variable as well
  as clarify what page you're trying to map to which tritium file.  Also, if
  there are no mappings for the page, it will be perfect proxied!

  Example starting code:
*/
log("")
log("")
log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
log("!! Detecting Page Type")
log("!! Path"+ $path)

match($path) {
  with(/^\/$|^\/\?/){
    $page_type = "Home"
  }
   with(/^\/sample-product\//){
    $page_type = "Product"     
  }
  with(/^\/brands\//){
    $page_type = "Brands"     
  }
  
  //with(/^\/(shop-misc|shop-new-product-category|shop-iphone|shop-ipod|shop-mac)\//){
  with(/^\/(.*?)\//){
    $page_type = "Shop"     
  }
  else(){
    log('host : ' + $host)
    $page_type = "No Match"
    $content_type = "desktop content"
  }
}

log("!! Page type is: " + $page_type)
log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
log("")
log("")
log("Content type is: " + $content_type)


