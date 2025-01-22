import { Component } from '@angular/core';
import { MatTooltipModule  } from "@angular/material/tooltip";


@Component({
  selector: 'app-progress-bar',
  imports: [MatTooltipModule ],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  progress: number =0;
  backgroundColor: string = '#4caf50';
  tooltip: string = '🤔 Just Started!';


  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const containerWidth = target.clientWidth;
    const clickedPos = event.offsetX;
    let newProgress = (clickedPos / containerWidth) * 100;
    if (newProgress > 100) {
      newProgress = 100;
    }

    this.progress = Math.round(newProgress);
    const result = this.getProgressBarColor();
    this.tooltip = result.tooltip;
    this.backgroundColor = result.backgroundColor;
  }

  getProgressBarColor(): { tooltip: string, backgroundColor: string } {
    if (this.progress < 30) {
      return { tooltip: '🤔 Just Started!', backgroundColor: '#f44336' };
    } else if (this.progress < 60) {
      return { tooltip: '🚶 Getting There!', backgroundColor: '#ff9800' };
    } else if (this.progress < 90) {
      return { tooltip: '🏃 Almost There!', backgroundColor: '#4caf50' };
    } else {
      return { tooltip: '🎉 Great Job!', backgroundColor: '#2196f3' };
    }
  }

}
