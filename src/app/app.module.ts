import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePessoaComponent } from './create-pessoa/create-pessoa.component';
import { PessoaDetailsComponent } from './pessoa-details/pessoa-details.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { UpdatePessoaComponent } from './update-pessoa/update-pessoa.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlertModule } from './alert/alert.module';

@NgModule({
  declarations: [
    AppComponent,
    CreatePessoaComponent,
    PessoaDetailsComponent,
    PessoaListComponent,
    UpdatePessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlertModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
