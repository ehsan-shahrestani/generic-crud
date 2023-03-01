import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {ThemeComponent} from './theme/theme.component';
import {LayoutComponent} from './theme/layout/layout.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import { HeaderComponent } from './theme/header/header.component';
import { FooterComponent } from './theme/footer/footer.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import { MenuComponent } from './theme/menu/menu.component';


@NgModule({
  declarations: [
    ThemeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule
  ]
})
export class AdminModule {
}
