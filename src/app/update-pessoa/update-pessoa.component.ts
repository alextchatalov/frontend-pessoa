import { Component, OnInit } from '@angular/core';
import {Pessoa} from "../pessoa";
import {PessoaService} from "../pessoa.service";
import { ActivatedRoute ,Router } from '@angular/router';

@Component({
  selector: 'app-update-pessoa',
  templateUrl: './update-pessoa.component.html',
  styleUrls: ['./update-pessoa.component.scss']
})
export class UpdatePessoaComponent implements OnInit {
  cpf: string;
  pessoa: Pessoa;

    constructor(private route: ActivatedRoute,private router: Router,
    private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoa = new Pessoa();
    this.cpf = this.route.snapshot.params['cpf'];
    this.pessoaService.getPessoa(this.cpf)
      .subscribe(data => {
        console.log(data)
        this.pessoa = data;
      }, error => console.log(error));
  }

  updatePessoa() {
    this.pessoaService.updatePessoa(this.pessoa)
      .subscribe(data => console.log(data), error => console.log(error));
    this.pessoa = new Pessoa();
    this.gotoList();
  }

  onSubmit() {
    this.updatePessoa();    
  }

  gotoList() {
    this.router.navigate(['pessoas']);
  }

}
