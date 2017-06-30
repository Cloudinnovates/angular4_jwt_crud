import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: '/pages', pathMatch: 'full' },
    /*
    {
      path: '',
      loadChildren: 'app/restrict/restrict.module#RestrictModule'
    }, */
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
    { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' }
    /* { path: 'signup', loadChildren: 'app/signup/signup.module#SignupModule' },
    { path: 'forget', loadChildren: 'app/pass-reset/pass-reset.module#PassResetModule' }*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
