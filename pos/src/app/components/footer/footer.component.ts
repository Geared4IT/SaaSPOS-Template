import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="footer">
  <div class="navbar-brand">
  <a class="navbar-item">
    Contact # 073 083 8087
  </a>
</div>
    </div>
`,
styles: [
  `.footer {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  text-shadow: -1px -1px 0px rgba(255,255,255,0.3), 1px 1px 0px rgba(0,0,0,0.8);
  background-color: #efefef;
  font-family: cursive!important;
  font-size: inherit;`]

})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
