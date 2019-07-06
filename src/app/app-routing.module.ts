import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
// u need to import all the components u use in the routes

const appRoutes = [
  { path: 'characters', component: TabsComponent, children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'},
    // this appends all to the existing path, loads side with all as the value of the default tab, the pathMatch parameter changes
    // in this it would be /characters or /characters/all or /characters/full
     // the default matching strategy which is preifx
    {path: ':side', component: ListComponent}
  ]},
  // here u r loading the tabs component for an ampty path.
  // path is the part after your domain
  { path: 'new-character', loadChildren: './create-character/create-character.module#CreateCharacterModule'},
  // HERE U HAD A HUGE ERROR WHERE U OG HAD .ts IN THIS ABOVE ROUTE BUT HAD TO REMOVE IT AND THEN IT WORKED
  // the # specifies the name of the module from th export class in the create character module ts
  // loadChildren allows u to point to a route to a specific module,the create character module ts
  // u need to restart ng Serve if u implement the loadCHildren feature
  // no need for a slash
  {path: '**', redirectTo: '/characters'}
  // this route is added so an invalid route does not crash ur application, must be the last route to work.
  ];

@NgModule({
imports: [
  RouterModule.forRoot(appRoutes)
  // this registers our routes in the router module provided by angular
],
exports: [
  RouterModule
  // by default feautures in a module are encapsulated to that module, so simply importing this
// into app module aint gon help so u use this. this makes it available to any module which imports it
]
}) // a module is only a module if it has this
export class AppRoutingModule {}
// u import this into the app module
// by default feautures in a module are encapsulated to that module, so simply importing this
// into app module aint gon help
