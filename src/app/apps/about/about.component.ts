import { Component } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  

  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;
  }

  showMap(){
    var link = ""+"http://maps.google.com/maps?daddr=" + 43.2480501 + "," + 13.5074901;
    window.open(link, '_blank')
  }

}
