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
    describe(BACKSTAGE_PASSES, () => {
      it('does not change the quality if quality > 50', function() {
        items = [new Item(BACKSTAGE_PASSES, 20, 100)];
        update_quality();
        expect(items[0].quality).toEqual(100);
      });
      describe('Backstage passs with quality < 50', () => {
        it('increases the quality by 1 if sell_in is between 11 and 50', function() {
          items = [new Item(BACKSTAGE_PASSES, 11, 30)];
          update_quality();
          expect(items[0].quality).toEqual(31);
        });
        it('increases the quality by 2 if sell_in is is between 6 and 10', function() {
          items = [new Item(BACKSTAGE_PASSES, 6, 30)];
          update_quality();
          expect(items[0].quality).toEqual(32);
        });
        it('increases the quality by 3 if sell_in is is between 0 and 5', function() {
          items = [new Item(BACKSTAGE_PASSES, 2, 30)];
          update_quality();
          expect(items[0].quality).toEqual(33);
        });
      });
    });
    describe(SULFURAS, () => {
      it('does not change quality of Sulfuras', function() {
        items = [new Item(SULFURAS, 20, 100)];
        update_quality();
        expect(items[0].quality).toEqual(100);
      });
      it('does not change sell_in of Sulfuras', function() {
        items = [new Item(SULFURAS, 20, 100)];
        update_quality();
        expect(items[0].sell_in).toEqual(20);
      });
    });
  });
});
