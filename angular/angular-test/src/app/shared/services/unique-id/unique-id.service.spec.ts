import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
    it(`#${UniqueIdService.prototype.generateUniqueIdeWithPrefix.name} should generate id when called with prefix`, () => {
       const service = new UniqueIdService();
       const id = service.generateUniqueIdeWithPrefix('app');
       expect(id.startsWith('app-')).toBeTrue();
    });

});

