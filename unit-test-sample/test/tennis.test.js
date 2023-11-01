import {Tennis} from "../src/tennis";

describe('tennis', function () {

    beforeEach(()=>{
        tennis = new Tennis();
    });

    let tennis = new Tennis();

    function scoreShouldBe(expected) {
        expect(tennis.score()).toBe(expected);
    }

    it('should be love all', () => {
        scoreShouldBe('love all');
    });

    it('should be fifteen love ', () => {
        scoreShouldBe('fifteen love');
    });

});