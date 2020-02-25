import { Component, OnInit } from '@angular/core';
import {Pessoa} from "../pessoa";
import {PessoaService} from "../pessoa.service";
import { ActivatedRoute ,Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-update-pessoa',
  templateUrl: './update-pessoa.component.html',
  styleUrls: ['./update-pessoa.component.scss']
})
export class UpdatePessoaComponent implements OnInit {
  cpf: string;
  pessoa: Pessoa;

    constructor(private route: ActivatedRoute,private router: Router, protected alertService: AlertService,
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
      .subscribe(data => this.alertService.success('Pessoa alterada com sucesso!', ''), 
      error => this.alertService.error(error.error.message,''));
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
