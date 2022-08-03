import { LikeWidgetModule } from "./like-widget.module";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";

describe(LikeWidgetComponent.name, () => {
    let fixture: ComponentFixture<LikeWidgetComponent> = null;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LikeWidgetModule],
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent);
    });

    it("Should create component", () => {
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it ('Should auto generate ID when id input property is missing', () => {
        const component = fixture.componentInstance
        expect(component.id).toBeTruthy()
    })
});
