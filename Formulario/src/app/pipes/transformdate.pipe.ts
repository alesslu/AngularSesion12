import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformdate'
})
export class TransformdatePipe implements PipeTransform {

  transform(value: string,...args: any[]): any {
    if(value){
      const date = new Date(value)
      const now = new Date()
      const dif = now.getTime() - date.getTime()
      const minutes = Math.floor(dif/60000)
      const hours = Math.floor(minutes/60)
      const days = Math.floor(hours/24)
      if(minutes<60){
        return minutes + ' min ago'
      } else if (hours < 24){
        return hours + ' hours ago'
      } else if (days < 10){
        return days + ' days ago'
      } else {
        return date.toLocaleDateString('es-ES', {day:'2-digit', month:'short'})
      } 
    }
  }
}
