import { Component, OnInit } from '@angular/core';
import { ProgressService } from 'app/progress/progress.service';
import { UpgradeService } from 'app/upgrade/upgrade.service';
import { LanguageService } from 'app/language/language.service';

@Component({
  selector: 'app-upgrade-panel',
  templateUrl: './upgrade-panel.component.html',
  styleUrls: ['./upgrade-panel.component.sass']
})
export class UpgradePanelComponent implements OnInit {

  constructor(public upgrades: UpgradeService,
              public progress: ProgressService,
              public lang: LanguageService)
  {
  }

  ngOnInit() {
  }

}
