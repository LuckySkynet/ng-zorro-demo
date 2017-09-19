import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { P404Component } from './pages/p404/p404.component';
import { P500Component } from './pages/p500/p500.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'regist',
        component: RegistComponent
    },
    {
        path: '500',
        component: P500Component
    },
    {
        path: 'home',
        loadChildren: './workspace/workspace.module#WorkspaceModule'
    },
    {
        path: '**',
        component: P404Component
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }