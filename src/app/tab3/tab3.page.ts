import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  collection = [
    {
      name: 'GitHub',
      image: "logo-github",
      link: "https://github.com/erevos-13"
    },
    {
      name: 'linkedin',
      image: "logo-linkedin",
      link: "https://www.linkedin.com/in/orfeas-voutsaridis-72b618a9"
    },
    {
      name: 'webpage',
      image: "code",
      link: "https://voutsaridiso.com/"
    }
  ]

  constructor() {}

}
