import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-listcomponent';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component'
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent],
  imports: [CommonModule, SharedModule, FormsModule, CustomersRoutingModule],
  exports: [CustomersComponent]
})

export class CustomersModule { }
