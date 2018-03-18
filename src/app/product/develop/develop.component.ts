import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-develop',
  templateUrl: './develop.component.html',
  styleUrls: ['./develop.component.scss']
})
export class DevelopComponent implements OnInit {

  id: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.parent.params['id'];
  }

  showOverview() {
    this.router.navigateByUrl('/product/' + this.id + '/(design:options//develop:overview)');
  }

  showCode() {
    this.router.navigateByUrl('/product/' + this.id + '/(design:options//develop:code)');
  }

  showCI() {
    this.router.navigateByUrl('/product/' + this.id + '/(design:options//develop:ci)');
  }
}
