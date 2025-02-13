import { Path } from './../../node_modules/path-scurry/dist/commonjs/index.d';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { AuthGuard } from './components/auth/auth-guards';
import { LoginComponent } from './components/auth/login/login.component';
import { DespesasCreateComponent } from './components/despesas/despesas-create/despesas-create.component';
import { CategoriaCreateComponent } from './components/categorias/categoria-create/categoria-create.component';
import { CategoriaReadComponent } from './components/categorias/categoria-read/categoria-read.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            
                { path: '', redirectTo: '/login', pathMatch: 'full' },
                { path: 'login',component: LoginComponent,},

                {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: 'dashboard', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule),  },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },

                    { path: 'usuario/create',
                      component: UsuarioCreateComponent,
                      canActivate: [AuthGuard],
                     },

                     { path: 'despesa/create',
                        component: DespesasCreateComponent,
                        
                       },
                       { path: 'categoria/read',
                        component: CategoriaReadComponent,
                        
                       },

                    

                ]
            },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}