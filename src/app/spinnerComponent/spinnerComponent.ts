import { Component } from '@angular/core';
import { SpinnerService } from './spinnerService';

@Component({
  selector: 'my-app',
  templateUrl: './spinnerComponent.html'
})

export class SpinnerComponent {

  isLoading: boolean = false;

  constructor(private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.isLoading = this.spinnerService.isLoading;
  }
}
