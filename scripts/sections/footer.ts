$("./body") {
  $('./div[@id="Footer"]') {
  	add_class('mw-footer')
  	$('./p'){
  		remove()

  	}
  	insert("div", class: "mw-logo"){
        inner(){
          set('<p>
      				All prices are in <span title="Default Currency">USD</span>	</p>
      				<p>Copyright 2014 iGadgetCommerce.</p>
              <p class="mw-power"> Powered by : </p> <p >MOOVWEB</p>'
          )
        }
      }
  } 

}
