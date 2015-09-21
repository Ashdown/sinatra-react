describe("Utils", function() {

    it('should exist', function() {
        expect(modules.utils).not.toBe(null);
    })

    describe('crown function', function() {

        it("should make a king", function () {
            expect(modules.utils.crown('Dave')).toBe('King Dave');
        });

    });

});