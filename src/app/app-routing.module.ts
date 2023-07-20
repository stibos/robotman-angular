import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RootComponent} from './root/root.component';

const routes: Routes = [
  { path: '', component: RootComponent},
  { path: 'analyze', loadChildren: () => import('../modules/robotman-analyze/robotman-analyze.module').then(m => m.RobotmanAnalyzeModule)},
  { path: 'configure', loadChildren: () => import('../modules/robotman-configure/robotman-configure.module').then(m => m.RobotmanConfigureModule)},
  { path: 'define', loadChildren: () => import('../modules/robotman-define/robotman-define.module').then(m => m.RobotmanDefineModule)},
  { path: 'run', loadChildren: () => import('../modules/robotman-run/robotman-run.module').then(m => m.RobotmanRunModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
