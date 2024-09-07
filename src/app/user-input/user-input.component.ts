import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultsService } from '../investment-results/investment-results.service';
import { InvestmentResultsComponent } from "../investment-results/investment-results.component";
import { annualData } from '../types/annual-data.module';

@Component({
    standalone: true,
    styleUrl: './user-input.component.css',
    templateUrl: './user-input.component.html',
    selector: 'app-user-input',
    imports: [FormsModule, InvestmentResultsComponent]
})
export class UserInputComponent {
    initialInvestment: number = 0;
    annualInvestment: number = 0;
    expectedReturn: number = 0;
    duration: number = 0;
    @Output() myOutput = new EventEmitter<annualData[]>();
    public annualData: annualData[] = [];

    constructor(private InvestmentResultsService: InvestmentResultsService) {
    }

    public calculate() {
        console.log('initialInvestment: %d', this.initialInvestment)
        console.log('annualInvestment: %d', this.annualInvestment)
        console.log('expectedReturn: %d', this.expectedReturn)
        console.log('duration: %d', this.duration)
        this.InvestmentResultsService.initialInvestment = this.initialInvestment
        this.InvestmentResultsService.annualInvestment = this.annualInvestment
        this.InvestmentResultsService.expectedReturn = this.expectedReturn
        this.InvestmentResultsService.duration = this.duration
        this.InvestmentResultsService.calculateInvestmentResults()
        this.annualData = this.InvestmentResultsService.calculateInvestmentResults()
        console.log(this.annualData)
    }
}