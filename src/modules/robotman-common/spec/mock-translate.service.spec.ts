import {MockTranslateService} from "./mock-translate.service";

describe('MockTranslateService', () => {

  let sut: MockTranslateService = new MockTranslateService();

  describe("instant", () => {
    it('should return the argument value', () => {
      expect(sut.instant("test")).toEqual("test");
    });
  });

});
