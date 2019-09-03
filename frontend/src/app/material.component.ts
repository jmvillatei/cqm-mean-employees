import { NgModule } from '@angular/core';

// MATERIAL
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatStepperModule} from '@angular/material/stepper'; 
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatTooltipModule,
        MatInputModule,
        MatStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatDialogModule,
        MatCardModule
    ],
    exports: [MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatTooltipModule,
        MatInputModule,
        MatStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatDialogModule,
        MatCardModule
    ],
})
export class MaterialComponentModule {
 }