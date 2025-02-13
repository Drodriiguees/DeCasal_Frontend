import { AuthGuard } from './components/auth/auth-guards';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';

import { TableModule } from 'primeng/table';

import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { MessageService } from 'primeng/api';
import { AuthInterceptor } from './components/auth/auth.interceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/auth/login/login.component';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DespesasCreateComponent } from './components/despesas/despesas-create/despesas-create.component';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { CategoriaCreateComponent } from './components/categorias/categoria-create/categoria-create.component';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { CategoriaReadComponent } from './components/categorias/categoria-read/categoria-read.component';



@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent,
        UsuarioCreateComponent,
        LoginComponent,
        DespesasCreateComponent,
        CategoriaCreateComponent,
        CategoriaReadComponent,
        
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppLayoutModule,
        TableModule,
        RouterModule, 
        FormsModule,
        PasswordModule,  
        CheckboxModule,  
        ButtonModule,    
        InputTextModule,
        MenubarModule,
        TabViewModule,
        DropdownModule,
        MessageModule,
        ToastModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, 

         AuthGuard,CountryService, CustomerService, EventService, IconService, NodeService, MessageService, PhotoService, ProductService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
