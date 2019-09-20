describe('Gilded Rose', function() {
  it('reduces the quality by 1 every day', function() {
    items = [new Item('foo', 3, 50)];
    update_quality();
    expect(items[0].quality).toEqual(49);
  });

  it('reduces the sellin by 1 every day', function() {
    items = [new Item('foo', 3, 50)];
    update_quality();
    expect(items[0].sell_in).toEqual(2);
  });

  describe('Special products', () => {
    describe(AGED_BRIE, () => {
      it('increases the quality if Brie and quality < 50', function() {
        items = [new Item(AGED_BRIE, 3, 30)];
        update_quality();
        expect(items[0].quality).toEqual(31);
      });
      it('does not change the quality if Brie and quality > 50', function() {
        items = [new Item(AGED_BRIE, 3, 100)];
        update_quality();
        expect(items[0].quality).toEqual(100);
      });
    });
  });
});
