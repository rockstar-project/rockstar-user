import { Component, OnInit } from '@angular/core';
import { UserService, Runtime, MicroserviceService } from '../../core';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-profile-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutMeComponent  implements OnInit {

  skillset: Array<string> = [];
  runtimes: Array<Runtime> = [];

  constructor(private user: UserService, private microserviceService: MicroserviceService) {
  }

  ngOnInit() {
    this.getInterests();
    this.getRuntimes();
  }

  getInterests() {
    return Observable.of(['java', 'springboot', 'angular'])
  }

  getRuntimes() {
    this.microserviceService.getRuntimes()
        .subscribe(result => this.runtimes = result);
  }

  public onAddNewSkill(item) {
    console.log('tag added: value is ' + item);
  }

  public onRemoveSkill(item) {
      console.log('tag removed: value is ' + item);
  }

  public onUpdateSkill(item) {
    console.log('tag edited: current value is ' + item);
  }
}
