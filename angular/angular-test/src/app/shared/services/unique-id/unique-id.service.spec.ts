import { empty } from "rxjs";
import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {
    let service: UniqueIdService = null;

    beforeEach(() => {
        service = new UniqueIdService();
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdeWithPrefix.name}
        should generate id when called with prefix`, () => {
        const id = service.generateUniqueIdeWithPrefix("app");
        expect(id.startsWith("app-")).toBeTrue();
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdeWithPrefix.name} 
        should not generate duplicate IDs when called multiple times`, () => {
        const ids = new Set();
        for (let i = 0; i < 50; i++) {
            ids.add(service.generateUniqueIdeWithPrefix("app"));
        }
        expect(ids.size).toBe(50);
    });

    it(`#${UniqueIdService.prototype.getNumberofGeneratedUniqueIds.name} 
        should return the number of generatedIds when called`, () => {
        service.generateUniqueIdeWithPrefix("app");
        service.generateUniqueIdeWithPrefix("app");
        expect(service.getNumberofGeneratedUniqueIds()).toBe(2);
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdeWithPrefix.name}
        should throw when called with empty`, () => {
        const emptyValues = [null, undefined, ""];
        emptyValues.forEach((emptyValues) => {
            expect(() =>
                service.generateUniqueIdeWithPrefix(emptyValues)
            ).toThrow();
        });
    });
});
