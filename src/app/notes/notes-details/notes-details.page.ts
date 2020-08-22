import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../notes.service';
import { Note } from '../note.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.page.html',
  styleUrls: ['./notes-details.page.scss'],
})
export class NotesDetailsPage implements OnInit {
      note: Note
      constructor(
        private _activatedRouter: ActivatedRoute,
        private _notesService: NotesService,
        private _router: Router,
        private _alertCtrl: AlertController
        ) { }

      ngOnInit() {
          this._activatedRouter.paramMap.subscribe(paramMap => {
              const recipeId = paramMap.get('noteId')
              this.note = this._notesService.getNote(recipeId)
              console.log(this.note)
          })
      }

      async deleteNote(){

          const alerElement = await this._alertCtrl.create({
            header: 'Estás Seguro, ¿Quieres eliminar está nota?',
            message: 'Ten cuidado',
            buttons:[
                {
                    text:'Cancel',
                    role:'cancel'
                },
                {
                    text:'Delete',
                    handler: ()=>{
                      this._notesService.deleteNotes(this.note.id)
                      this._router.navigate(['/notes'])
                    }
                }
            ]
          })

          await alerElement.present()
      }

}
