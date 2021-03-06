import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';

import { HomePage } from './home';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    ComponentsModule,
    PipesModule
  ]
})
export class HomePageModule { }
