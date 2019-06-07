import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  
  template: `
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <nav class="navbar" style="background-color:#efefee">
    <!-- logo -->
        
    <div>
          <div class="header"> 
            JENNY'S CHINESE MINI MARKET 
            </div>

          <div class="subHeader">    
         BEST TAKEAWAY STORE
    </div>
    </div>
    
  </nav>
  `,
  styles: [ `
  .header {  
	text-align: center;
	text-shadow: -1px -1px 0px rgba(255,255,255,0.3), 1px 1px 0px rgba(0,0,0,0.8);
	color: #333;
	opacity: 0.4;
  font: 700 22px 'Bitter';
  font-family: cursive!important;
  font-size: inherit;
  
}

.subHeader {  
	text-align: center;
	text-shadow: -1px -1px 0px rgba(255,255,255,0.3), 1px 1px 0px rgba(0,0,0,0.8);
	color: green;
	opacity: 0.4;
  font: 700 13px 'Bitter';
  font-family: cursive!important;
  
}

`]
})

export class HeaderComponent implements OnInit {

  constructor() { }
  ngOnInit() {  }

}
