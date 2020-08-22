import { Component, OnInit } from '@angular/core';
import { NotesService } from "./notes.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
      notes = []
      constructor(
          private _noteService: NotesService,
          private _router: Router
      ) { }

      ngOnInit() {
          this.notes = this._noteService.getNotes()
      }

      ionViewWillEnter(){
         this.notes=  this._noteService.getNotes()
      }

      addNote(){
        this._router.navigate(['/newNote'])
         console.log('testing')
      }

}
