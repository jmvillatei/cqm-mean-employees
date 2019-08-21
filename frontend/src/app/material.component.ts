import { NgModule } from '@angular/core';

// MATERIAL
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatExpansionModule],
    exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatExpansionModule],
})
export class MaterialComponentModule {
    panelOpenState = false;
 }