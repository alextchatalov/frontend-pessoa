import { Component, OnInit } from '@angular/core';
import {Pessoa} from "../pessoa";
import {PessoaService} from "../pessoa.service";
import { ActivatedRoute ,Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-details',
  templateUrl: './pessoa-details.component.html',
  styleUrls: ['./pessoa-details.component.scss']
})
export class PessoaDetailsComponent implements OnInit {
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

  list(){
    this.router.navigate(['pessoas']);
  }

}
