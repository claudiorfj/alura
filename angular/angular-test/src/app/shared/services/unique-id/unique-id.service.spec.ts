import { UniqueIdService } from './unique-id.service';
describe('UniqueIdService', () => {
    it('#generateUniqueIdeWithPrefix should generate id when called with prefix', () => {
       const service = new UniqueIdService();
       const id = service.generateUniqueIdeWithPrefix('app');
       expect(id).toContain('app-')
    });

});

