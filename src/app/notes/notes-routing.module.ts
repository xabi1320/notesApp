import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesPage } from './notes.page';

const routes: Routes = [
  {
    path: '',
    component: NotesPage
  },
  {
    path: 'notes-details',
    loadChildren: () => import('./notes-details/notes-details.module').then( m => m.NotesDetailsPageModule)
  },
  {
    path: 'note-add',
    loadChildren: () => import('./note-add/note-add.module').then( m => m.NoteAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesPageRoutingModule {}
