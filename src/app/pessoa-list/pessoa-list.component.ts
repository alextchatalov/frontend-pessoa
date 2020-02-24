import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Pessoa} from "../pessoa";
import { Router } from '@angular/router';
import {PessoaService} from "../pessoa.service";

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent implements OnInit {
  pessoas: Observable<Pessoa[]>
  constructor(private pessoaService: PessoaService,
    private router: Router) {}

    ngOnInit() {
      this.reloadData();
    }

    reloadData() {
      this.pessoas = this.pessoaService.getPessoaList();
    }

    deletePessoa(cpf: string) {
      this.pessoaService.deletePessoa(cpf)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }

    pessoaDetails(cpf: string) {
      this.router.navigate(['details', cpf]);
    }
    pessoaEditar(cpf: string) {
      this.router.navigate(['update', cpf]);
    }

}
