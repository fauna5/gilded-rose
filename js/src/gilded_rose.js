function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

var AGED_BRIE = 'Aged Brie';
var BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
var SULFURAS = 'Sulfuras, Hand of Ragnaros';
var CONJURED = 'Conjured';

function update_quality() {
  items = items.map(item => {
    if (item.name === SULFURAS) {
      return item;
    }
    if (item.name === AGED_BRIE) {
      item = updateBrie(item);
    } else if (item.name === BACKSTAGE_PASSES) {
      item = updateBackstagePasses(item);
    } else if (item.name === CONJURED) {
      item = updateConjured(item);
    } else {
      item = updateStandard(item);
    }
    item.sell_in -= 1;
    return item;
  });
}

function updateBrie(brie) {
  if (brie.quality < 50) {
    brie.quality += 1;
  }
  if (brie.sell_in <= 0 && brie.quality < 50) {
    brie.quality += 1;
  }
  return brie;
}

function updateBackstagePasses(pass) {
  if (pass.sell_in <= 0) {
    pass.quality = 0;
  } else if (pass.quality < 50) {
    if (pass.sell_in >= 10 && pass.sell_in < 49) {
      pass.quality += 1;
    } else if (pass.sell_in >= 5 && pass.sell_in < 10) {
      pass.quality += 2;
    } else if (pass.sell_in < 5) {
      pass.quality += 3;
    }
  }
  pass.quality = pass.quality > 50 ? 50 : pass.quality;
  return pass;
}

function updateConjured(item) {
  var quality = item.quality;
  if (item.sell_in <= 0) {
    quality -= 4;
  } else {
    quality -= 2;
  }
  item.quality = quality < 0 ? 0 : quality;
  return item;
}

function updateStandard(item) {
  var quality = item.quality;
  if (item.sell_in <= 0) {
    quality -= 2;
  } else {
    quality -= 1;
  }
  item.quality = quality < 0 ? 0 : quality;
  return item;
}
