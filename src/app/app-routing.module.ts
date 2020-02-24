import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { CreatePessoaComponent } from './create-pessoa/create-pessoa.component';
import { UpdatePessoaComponent } from './update-pessoa/update-pessoa.component';
import { PessoaDetailsComponent } from './pessoa-details/pessoa-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'pessoa', pathMatch: 'full' },
  { path: 'pessoas', component: PessoaListComponent },
  { path: 'adicionar', component: CreatePessoaComponent },
  { path: 'update/:cpf', component: UpdatePessoaComponent },
  { path: 'details/:cpf', component: PessoaDetailsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
