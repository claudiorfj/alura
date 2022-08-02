import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
    it(`#${UniqueIdService.prototype.generateUniqueIdeWithPrefix.name} should generate id when called with prefix`, () => {
       const service = new UniqueIdService();
       const id = service.generateUniqueIdeWithPrefix('app');
       expect(id.startsWith('app-')).toBeTrue();
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdeWithPrefix.name} should not generate duplicate IDs when called multiple times`), () => {
        const service = new UniqueIdService();
        const ids = new Set();
        for (let i = 0; i < 50; i++){
            ids.add(service.generateUniqueIdeWithPrefix('app'));
        }
        expect(ids.size).toBe(50);
    }

});

