import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-date-picker-size',
  template: ` 
  <div class="container">
    <nz-range-picker nzSize="large"
    [(ngModel)]="dateRange"
    [nzRenderExtraFooter]="test"></nz-range-picker>

    </div>

    <ng-template #test> 
    <div style="display: flex; gap:10px; padding: 10px">
    <button (click)="selectRange(7)"> Last 7 days </button> 
    <button (click)="selectRange(30)"> Last 30 days </button> 
    <button (click)="selectRange(90)"> Last 90 days </button>  
    </div> 
    </ng-template>
  `,
  styles: [
    `
    button{
      background: #eeeeee;
      color: #000;
      border: none;
      border-radius: 4px
    }
      nz-date-picker,
      nz-range-picker {
        margin: 0 8px 12px 0;
      }

      .container{
        height: 100vh;
        width: 100%;
        padding: 100px;
        display:flex;
        justify-content: center;
        align-items: start;
      }
    `,
  ],
})
export class NzDemoDatePickerSizeComponent {
  dateRange: any;
  selectRange(days) {
    this.dateRange = [this.addDays(new Date(), -days), new Date()];
  }

  addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
