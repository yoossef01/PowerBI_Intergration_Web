import { Component, OnInit } from '@angular/core';
import { PowerbiService } from 'src/app/powerbi.service';
import { NgxPowerBiService } from 'ngx-powerbi';
import * as pbi from 'powerbi-client';
@Component({
  selector: 'app-embeded',
  templateUrl: './embeded.component.html',
  styleUrls: ['./embeded.component.scss']
})
export class EmbededComponent implements OnInit {

  embedInfo: any;

  constructor(private powerBIService: PowerbiService, private powerBiService: NgxPowerBiService) {}

  ngOnInit(): void {
    this.powerBIService.getEmbedInfo().subscribe(data => {
      this.embedInfo = data;
      this.embedReport();
    });
  }

  embedReport() {
    const reportContainer = document.getElementById('reportContainer');
    
    // Check if the container element exists before embedding
    if (reportContainer instanceof HTMLElement) {
      const embedConfiguration = {
        type: 'report',
        tokenType: pbi.models.TokenType.Embed,
        accessToken: this.embedInfo.embedToken,
        embedUrl: this.embedInfo.embedReports[0].embedUrl,
        id: this.embedInfo.reportId,
        
        settings: {
          filterPaneEnabled: true,
          navContentPaneEnabled: true
        }
      };
  
      const report = this.powerBiService.embed(reportContainer, embedConfiguration);
    } else {
      console.error('Report container element not found.');
    }
  }
}

