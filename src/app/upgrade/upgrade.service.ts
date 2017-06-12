import { Injectable } from '@angular/core';
import { Savable } from 'app/save/savable';

import { Upgrade } from 'app/upgrade/upgrade'
import { CurrencyService } from 'app/currency/currency.service';
import { ProgressService } from 'app/progress/progress.service';
import { ContentService } from 'app/content/content.service';

@Injectable()
export class UpgradeService {

  private upgrades: {[label: string]: Upgrade} = {}

  constructor(private currency: CurrencyService,
              private progress: ProgressService) 
  { 
  }

  public addUpgrade(upgrade: Upgrade): void
  {
    this.upgrades[upgrade.tag()] = upgrade;
  }

  public tags(): string[]
  {
    let array: string[] = [];    
    for(let tag in this.upgrades)
    {
      array.push(tag);
    }
    return array;
  }

  public tag(upgrade_id: string): string
  {
    return this.upgrades[upgrade_id].tag();
  }

  public tagT(upgrade_id: string): string
  {
    return this.upgrades[upgrade_id].tagT();
  }

  public tagD(upgrade_id: string): string
  {
    return this.upgrades[upgrade_id].tagD();
  }

  public xcost(upgrade_id: string): number
  {
    return this.upgrades[upgrade_id].xcost();
  }

  public canPurchase(upgrade_id: string)
  {
    return this.upgrades[upgrade_id].canPurchase();
  }

  public purchase(upgrade_id: string): void
  {
    if(this.canPurchase(upgrade_id))
    {
      this.progress.trigger("generic_upgrade_purchase");
      this.upgrades[upgrade_id].purchase();
    }
  }

  public getCurrency(upgrade_id: string): number
  {
    return this.upgrades[upgrade_id].getCurrency();
  }

  public isPurchased(upgrade_id: string): boolean
  {
    return this.upgrades[upgrade_id].isPurchased();
  }

  public getState(): {[label: string]: any}
  {
    let state: {[label: string]: any} = {};
    return state; 
  }

  public setState(state : {[label: string]: any}): void
  {
  }

  public clearState(): void
  {
  }
}
