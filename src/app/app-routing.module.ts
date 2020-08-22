import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full'
  },
  {
    path: 'notes',
    children:[{
        path: "",
        loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
    },
    {
        path: ":noteId",
        loadChildren:() =>import('./notes/notes-details/notes-details.module').then(m => m.NotesDetailsPageModule)
    }]
  },
  {
    path: 'newNote',
    loadChildren: () => import('./notes/note-add/note-add.module').then(m => m.NoteAddPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
