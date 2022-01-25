import { Component, OnInit } from '@angular/core';
import { Blog } from './blog-type';
import { ServiceblogService } from './blog-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogsDetail: Blog[] = [];

  constructor(
    public service: ServiceblogService,
    public router: Router,
    public http: HttpClient
  ) {
    this.service.showEdit = false;
  }

  relayOn = [
    {
      image: 'assets/images/team/giuseppina.jpg',
      icon: 'sl-icon-envelope-open text-info-gradiant',
      name: 'Giuseppina Bistosini',
      points: 'Punti in classifica: 1000',
      division: 'D2'
    },
    {
      image: 'assets/images/team/fabrizioperticarari.jpg',
      icon: 'sl-icon-call-end text-info-gradiant',
      name: 'Fabrizio Perticarari',
      points: 'Punti in classifica: 1000',
      division: 'D2'
    },
    {
      image: 'assets/images/team/lucacampus.jpg',
      icon: 'sl-icon-map text-info-gradiant',
      name: 'Luca Campus',
      points: 'Punti in classifica: 1000',
      division: 'D1'
    },
    {
      image: 'assets/images/team/samuele.jpg',
      icon: 'sl-icon-map text-info-gradiant',
      name: 'Samuele Travaglini',
      points: 'Punti in classifica: 1000',
      division: 'D1'
    },
    {
      image: 'assets/images/team/fabriziogrimaldi.jpg',
      icon: 'sl-icon-map text-info-gradiant',
      name: 'Fabrizio el tigre Grimaldi',
      points: 'Punti in classifica: 1000',
      division: 'D1'
    },
    {
      image: 'assets/images/team/giuseppegismondi.jpg',
      icon: 'sl-icon-map text-info-gradiant',
      name: 'Giuseppe Gismondi',
      points: 'Punti in classifica: 1000',
      division: 'D1'
    },
    {
      image: 'assets/images/team/maryuricatozzi.jpg',
      icon: 'sl-icon-map text-info-gradiant',
      name: 'Maryuri Catozzi',
      points: 'Punti in classifica: 1000',
      division: 'D2'
    },
    {
      image: 'assets/images/team/leonardomogianesi.jpg',
      icon: 'sl-icon-map text-info-gradiant',
      name: 'Leonardo Mogianesi',
      points: 'Punti in classifica: 1000',
      division: 'D2'
    }
  ];

  ngOnInit(): void {
    
  }

  print(){
    console.log("A")
  }

  loginClick() {
    this.router.navigate(['/login']);
  }

  newPost() {
    this.router.navigate(['/post']);
  }

  viewDetail(id: number) {
    this.service.detailId = id;

    if (this.service.loginStatusService) this.service.showEdit = true;

    this.router.navigate(['/blogDetail', id]);
  }

}