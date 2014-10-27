# HTML Transformations go here

$("/html") {
 add_canonical_tag()
  rewrite_links()
  absolutize()
  # # rewrite_aspnet_scripts()
  remove_all_styles()
  clean_mobile_meta_tags()
  add_assets()

  @import "sections/header.ts"
  @import "sections/footer.ts"

  @import "mappings.ts"

}
