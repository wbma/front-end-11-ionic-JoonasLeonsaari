import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import {LoginPage} from '../login/login';
import {UploadPage} from '../upload/upload';
import {HomePage} from '../home/home';
import {SignupPage} from '../signup/signup';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UploadPage;
  tab3Root = SignupPage;

  constructor() {

  }
}
