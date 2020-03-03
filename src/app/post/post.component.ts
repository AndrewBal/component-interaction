import {
      Component,
      ContentChild,
      ElementRef,
      Input,
      OnInit,
      OnDestroy,
      Output, 
      EventEmitter, 
      ChangeDetectionStrategy,
      ViewEncapsulation} from '@angular/core';
import {Post} from '../app.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html', 
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements
OnInit,
OnDestroy 

{

  @Input() post: Post
  @Output() onRemove =  new EventEmitter<number>()
  @ContentChild('info', {static: true}) infoRef: ElementRef

  removePost() {
    this.onRemove.emit(this.post.id)
  }


  

  

  ngOnInit(): void {
    console.log(this.infoRef.nativeElement)
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }


   
}
