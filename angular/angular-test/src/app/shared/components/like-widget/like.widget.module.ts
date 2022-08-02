import { LikeWidgetComponent } from './like-widget.components';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
    declarations: [LikeWidgetComponent],
    imports: [
        CommonModule,
        FontAwesomeModule,
    ],
    exports: [LikeWidgetComponent]
})
export class LikeWidgetModule {}