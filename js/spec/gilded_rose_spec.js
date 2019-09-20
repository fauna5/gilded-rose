describe("Gilded Rose", function() {

  it("reduces the quality by 1 every day", function() {
    items = [ new Item("foo", 3, 50) ];
    update_quality();
    expect(items[0].quality).toEqual(49);
  });

});
