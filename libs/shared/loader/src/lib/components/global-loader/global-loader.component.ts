import { Component } from '@angular/core';
import { GlobalLoaderService } from '../../services/global-loader.service';

@Component({
  selector: 'mlsk-global-loader',
  templateUrl: './global-loader.component.html',
  styleUrls: ['./global-loader.component.scss']
})
export class GlobalLoaderComponent {
  shouldShow$ = this.globalLoaderService.shouldShow$;
  
  constructor(private globalLoaderService: GlobalLoaderService) { }
}
