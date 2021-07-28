import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Phrase } from '../../shared/phrase.class';
import { PhraseService } from '../../shared/phrase.service';



@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit {

  phrase!: Phrase;

  constructor(
    private phraseService: PhraseService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = +params.id;

      if (isNaN(id)) return;

      this.phraseService
      .getPhrase(id)
      .then((res: Phrase)  => this.phrase = res)
    })


  }
  gotoPhrasesList() {
    const phraseID = this.phrase ? this.phrase.id : null
    this.router.navigate(['/phrases', {id: phraseID} ]).then();
  }

}
