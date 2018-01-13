import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    imports: [
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule
    ],
    exports: [
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule
    ]
})

export class MatModule { }
