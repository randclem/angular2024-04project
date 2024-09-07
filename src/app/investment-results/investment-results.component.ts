import { Component, Input } from '@angular/core';
import { annualData } from '../types/annual-data.module';
import { CurrencyPipe } from '@angular/common';

@Component({
    standalone: true,
    styleUrl: './investment-results.component.css',
    templateUrl: './investment-results.component.html',
    selector: 'app-investment-results',
    imports: [CurrencyPipe]
})
export class InvestmentResultsComponent {
    @Input() annualData: annualData[] = []
    

}