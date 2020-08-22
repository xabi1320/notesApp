import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.page.html',
  styleUrls: ['./note-add.page.scss'],
})
export class NoteAddPage implements OnInit {

  constructor(
      private _noteServices: NotesService,
      private _router: Router
  ) { }

  ngOnInit() {
  }

  saveNote( title, date, desccription){
      this._noteServices.addNotes(title.value, date.value, desccription.value)
      this._router.navigate(['/notes'])
  }

}
