import { Service } from './service';

const service = new Service();
describe('#NameFunction', () => {
  describe('should be true when case', () => {
    it.each`
      txt     | expected
      ${true} | ${true}
    `(`execute with $txt should be $expected`, ({ txt, expected }) => {
      expect(txt).toBe(expected);
    });
  });
});
