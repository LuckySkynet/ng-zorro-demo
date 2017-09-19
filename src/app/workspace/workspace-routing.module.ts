import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from '../hello/hello.component';
import { WorkspaceComponent } from './workspace.component';

const routes: Routes = [{
  path: '',
  component: WorkspaceComponent,
  children: [
    { path: '', component: HelloComponent }
    // { path: 'account', loadChildren: '../message/message.module#MessageModule', data: { title: 'account' } }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
