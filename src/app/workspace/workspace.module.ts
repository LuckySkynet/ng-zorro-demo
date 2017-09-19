import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
// Layout
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { HelloComponent } from '../hello/hello.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WorkspaceRoutingModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    BreadcrumbComponent,
    WorkspaceComponent,
    HelloComponent
  ]

})
export class WorkspaceModule { }
