import { Injectable } from "@angular/core";
import { annualData } from "../types/annual-data.module"

@Injectable({
    providedIn: 'root'
})
export class InvestmentResultsService {
    public initialInvestment!: number;
    public annualInvestment!: number;
    public expectedReturn!: number;
    public duration!: number;

    public calculateInvestmentResults() {
        const annualData:annualData[] = [];
        let investmentValue:number = this.initialInvestment;
      
        for (let i = 0; i < this.duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = Number(investmentValue * (this.expectedReturn / 100));
          investmentValue = Number(investmentValue) + Number(interestEarnedInYear) + Number(this.annualInvestment);
          const totalInterest =
            Number(investmentValue - this.annualInvestment * year - this.initialInvestment);
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: this.annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: Number(this.initialInvestment) + Number(this.annualInvestment) * year,
          });
        }
      
        return annualData;
      }
      
}