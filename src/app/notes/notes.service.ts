import { Injectable } from '@angular/core';
import { Note } from './note.model'

@Injectable({
  providedIn: 'root'
})
export class NotesService {
      private notes: Note[] =[{
          id: '1',
          date:'12 agosto 2020',
          title: 'Lista de supermercado',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id odio neque. Etiam tellus massa, tristique at dolor vel, venenatis posuere odio. Sed egestas molestie eros a ultrices. Maecenas placerat augue ut mauris molestie varius. Phasellus vestibulum, risus convallis vestibulum porta, lectus nibh faucibus odio, vitae volutpat magna augue ut justo.'
      },
      {
        id: '2',
        date:'10 julio 2020',
        title: 'Apuntes tema #2 Clase - Estructura de datos',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id odio neque. Etiam tellus massa, tristique at dolor vel, venenatis posuere odio. Sed egestas molestie eros a ultrices. Maecenas placerat augue ut mauris molestie varius. Phasellus vestibulum, risus convallis vestibulum porta, lectus nibh faucibus odio, vitae volutpat magna augue ut justo.'
      },
      {
        id: '3',
        date:'20 marzo 2020',
        title: 'Lista de respuesto para PC',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id odio neque. Etiam tellus massa, tristique at dolor vel, venenatis posuere odio. Sed egestas molestie eros a ultrices. Maecenas placerat augue ut mauris molestie varius. Phasellus vestibulum, risus convallis vestibulum porta, lectus nibh faucibus odio, vitae volutpat magna augue ut justo.'
      }]
      constructor() { }

      getNotes(){
          return[...this.notes]
      }
      getNote(noteId: string){
          return {
              ...this.notes.find(note => {
                return note.id === noteId
            })
          }
      }
      addNotes(title:string, date:string, description:string){
          this.notes.push({
              id: this.notes.length + 1 +"",
              title,
              date,
              description
          })
      }
      deleteNotes(noteId: string){
          this.notes = this.notes.filter(note => {
              return note.id !== noteId
          })
      }
}
