import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    imports: [
        MatCheckboxModule,
        MatTabsModule
    ],
    exports: [
        MatCheckboxModule,
        MatTabsModule
    ]
})

export class MatModule { }
