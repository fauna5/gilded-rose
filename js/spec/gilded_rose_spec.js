describe('Gilded Rose', function() {
  it('reduces the sellin by 1 every day', function() {
    items = [new Item('foo', 3, 50)];
    update_quality();
    expect(items[0].sell_in).toEqual(2);
  });

  it('reduces the quality by 1 every day', function() {
    items = [new Item('foo', 3, 50)];
    update_quality();
    expect(items[0].quality).toEqual(49);
  });

  it('reduces the quality by 2 every day after sell_in date passes', function() {
    items = [new Item('foo', -2, 50)];
    update_quality();
    expect(items[0].quality).toEqual(48);
  });

  it('reduces the quality by 2 every day after sell_in date passes but not past zero', function() {
    items = [new Item('foo', -2, 1)];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });

  it('does not reduce the quality if if reaches zero', function() {
    items = [new Item('foo', 3, 0)];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });

  it('does not reduce the quality if if reaches zero even after sell in passes', function() {
    items = [new Item('foo', -1, 0)];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });

  describe('Special products', () => {
    describe(AGED_BRIE, () => {
      it('increases the quality by 1 if quality < 50s', function() {
        items = [new Item(AGED_BRIE, 3, 30)];
        update_quality();
        expect(items[0].quality).toEqual(31);
      });
      it('increases the quality by 2 if quality < 50 and sell in date pasees', function() {
        items = [new Item(AGED_BRIE, 3, 30)];
        update_quality();
        expect(items[0].quality).toEqual(31);
      });
      it('does not change the quality if quality = 50', function() {
        items = [new Item(AGED_BRIE, 3, 50)];
        update_quality();
        expect(items[0].quality).toEqual(50);
      });
      it('does not change the quality if quality = 50 and sell in date passes', function() {
        items = [new Item(AGED_BRIE, -1, 50)];
        update_quality();
        expect(items[0].quality).toEqual(50);
      });
    });
    describe(BACKSTAGE_PASSES, () => {
      it('does not change the quality if quality = 50', function() {
        items = [new Item(BACKSTAGE_PASSES, 20, 50)];
        update_quality();
        expect(items[0].quality).toEqual(50);
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
      it('the quality goes to zero after sell in date passes', function() {
        items = [new Item(BACKSTAGE_PASSES, -1, 50)];
        update_quality();
        expect(items[0].quality).toEqual(0);
      });
    });
    describe(SULFURAS, () => {
      it('does not change quality of Sulfuras', function() {
        items = [new Item(SULFURAS, 20, 80)];
        update_quality();
        expect(items[0].quality).toEqual(80);
      });
      it('does not change quality of Sulfuras even after sell in passes', function() {
        items = [new Item(SULFURAS, -1, 80)];
        update_quality();
        expect(items[0].quality).toEqual(80);
      });
      it('does not change sell_in of Sulfuras', function() {
        items = [new Item(SULFURAS, 20, 80)];
        update_quality();
        expect(items[0].sell_in).toEqual(20);
      });
    });
    describe(CONJURED, () => {
      it('quality reduces by 2 each time', function() {
        items = [new Item(CONJURED, 2, 30)];
        update_quality();
        expect(items[0].quality).toEqual(28);
      });
      it('quality reduces by 2 but not past zero', function() {
        items = [new Item(CONJURED, 2, 1)];
        update_quality();
        expect(items[0].quality).toEqual(0);
      });
      it('quality reduces by 4 after sell in date', function() {
        items = [new Item(CONJURED, -1, 30)];
        update_quality();
        expect(items[0].quality).toEqual(26);
      });
      it('quality reduces by 4 after sell in date but not past zero', function() {
        items = [new Item(CONJURED, -1, 3)];
        update_quality();
        expect(items[0].quality).toEqual(0);
      });
      it('reduces the sell_in by 1', function() {
        items = [new Item(CONJURED, 1, 30)];
        update_quality();
        expect(items[0].sell_in).toEqual(0);
      });
    });
  });
});
